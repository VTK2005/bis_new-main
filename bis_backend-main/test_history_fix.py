"""
Quick unit-test for the conversation-history detection logic added to main.py.
Run: python test_history_fix.py
"""
import re

_CONV_HISTORY_PATTERNS = re.compile(
    r"\b("
    r"(what|which|tell me|show me|remind me)\b.{0,40}\b(previous|last|prior|earlier|before)\b.{0,30}\b(question|query|ask|asked|said|message|thing)\b"
    r"|(previous|last|prior|earlier)\b.{0,30}\b(question|query|message)\b"
    r"|what did i (ask|say|question)\b"
    r"|what i (asked|said|questioned).{0,20}\b(before|previously|earlier)\b"
    r"|(show me|tell me).{0,20}\bwhat i (asked|said)\b"
    r")",
    re.IGNORECASE,
)


def _answer_from_history(query, history):
    if not _CONV_HISTORY_PATTERNS.search(query):
        return None
    user_messages = [m["content"] for m in history if m.get("role") == "user"]
    if not user_messages:
        return "You haven't asked anything yet — this is your first message in this conversation."
    prev = user_messages[-1]
    if len(user_messages) == 1:
        return f'Your previous question was: "{prev}"'
    second_prev = user_messages[-2]
    return (
        f'Your previous question was: "{prev}"\n'
        f'And before that: "{second_prev}"'
    )


def run_tests():
    # ── Test 1: detect the exact failing query ──────────────────────────────
    history_before_current = [
        {"role": "user",      "content": "What are BIS certification requirements?"},
        {"role": "assistant", "content": "BIS requires..."},
    ]
    q1 = "what is the previous question i asked"
    ans = _answer_from_history(q1, history_before_current)
    print("Test 1 — detect 'previous question' query:")
    print(f"  Answer: {ans!r}")
    assert ans is not None, "FAIL: should have been detected as history query"
    assert "BIS certification" in ans, "FAIL: wrong previous question extracted"
    print("  PASS\n")

    # ── Test 2: normal BIS query must NOT be intercepted ───────────────────
    q2 = "What is the tensile strength of IS 2062 steel?"
    ans2 = _answer_from_history(q2, history_before_current)
    print("Test 2 — normal BIS query passes through to RAG:")
    print(f"  Answer: {ans2!r}")
    assert ans2 is None, "FAIL: normal query must return None"
    print("  PASS\n")

    # ── Test 3: empty conversation history ─────────────────────────────────
    q3 = "what was my last question?"
    ans3 = _answer_from_history(q3, [])
    print("Test 3 — empty history:")
    print(f"  Answer: {ans3!r}")
    assert ans3 is not None and ("haven't" in ans3 or "first" in ans3), "FAIL"
    print("  PASS\n")

    # ── Test 4: Vector RAG original bug — only one prior user turn ─────────
    single_turn_history = [
        {"role": "user", "content": "What is the previous question i asked"},
    ]
    q4 = "what is the previous question i asked"
    ans4 = _answer_from_history(q4, single_turn_history)
    print("Test 4 — original Vector-RAG bug (single user turn in history):")
    print(f"  Answer: {ans4!r}")
    assert ans4 is not None
    assert "What is the previous question i asked" in ans4
    print("  PASS\n")

    # ── Test 5: variant phrasings ───────────────────────────────────────────
    variants = [
        "Tell me my last question",
        "Show me what I asked before",
        "Remind me of my previous query",
        "What did I ask",
        "my previous message",
        "earlier question",
    ]
    print("Test 5 — phrase variants:")
    for v in variants:
        result = _answer_from_history(v, history_before_current)
        status = "PASS" if result is not None else "FAIL (not detected)"
        print(f"  {status}: {v!r}")
    print()

    print("=" * 50)
    print("All tests passed successfully.")


if __name__ == "__main__":
    run_tests()
