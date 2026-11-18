import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HomeInfoCards = () => {
    return (
        <section className="w-full bg-white px-6 pb-4 pt-2">
            <div className="mx-auto grid w-full max-w-375 grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="relative h-62 overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f4f8]">
                    <img
                        src="/chat_mini_left.jpg"
                        alt="Standards build trust, trust builds progress."
                        className="h-full w-full object-contain"
                    />
                </div>

                <div className="relative h-62 overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfcf8]">
                    <div className="relative z-10 flex h-full flex-col px-7 py-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-orange-50">
                                <div className="overflow-hidden rounded-sm">
                                    <img src="/indian_flag.jpg" alt="Indian flag" className="w-full" />
                                </div>
                            </div>

                            <h2 className="text-[15px] font-bold text-slate-800">
                                Building a Quality India
                            </h2>
                        </div>

                        <p className="mt-5 max-w-75 text-[11px] leading-[1.7] text-slate-700">
                            BIS works towards a safe, sustainable and
                            self-reliant India through standardization,
                            conformity assessment and quality culture.
                        </p>

                        <Link
                            href="/about"
                            className="mt-auto flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[10px] font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:shadow-md"
                        >
                            Know More
                            <ArrowRight size={13} />
                        </Link>
                    </div>

                    <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-green-100/60 blur-2xl" />
                </div>
            </div>
        </section>
    );
};

export default HomeInfoCards;
