/**
 * Seed BIS updates into MongoDB by calling the scrape endpoint.
 * Run this script once after starting the Next.js dev server:
 *   node scripts/seed-updates.mjs
 *
 * The dev server must be running at http://localhost:3000
 */

const BASE = "http://localhost:3000";

async function main() {
    console.log("Seeding BIS updates …");

    const res = await fetch(`${BASE}/api/scrape/bis`, {
        method: "GET",
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
        console.error("Scraper failed:", data);
        process.exit(1);
    }

    console.log(`Done! Scraped: ${data.scraped} | Inserted: ${data.inserted} | Updated: ${data.updated}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
