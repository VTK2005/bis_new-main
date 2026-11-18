"use client";

import Link from "next/link";
import { BadgeCheck, ArrowUpRight, ShieldCheck, FileCheck2, Package, Zap, ExternalLink, BookOpen } from "lucide-react";

const certificationTypes = [
    {
        icon: ShieldCheck,
        title: "ISI Mark (Product Certification)",
        description:
            "The ISI mark is India's most recognised quality certification mark, issued by BIS. It assures consumers that a product conforms to the relevant Indian Standard. Mandatory for over 170+ product categories including cement, steel, electrical appliances, and LPG cylinders.",
        link: "https://www.bis.gov.in/index.php/product-certification/product-certification-isi-mark-scheme/",
        color: "blue",
    },
    {
        icon: Package,
        title: "Compulsory Registration Scheme (CRS)",
        description:
            "CRS is mandatory for electronics and IT products sold in India. Products such as laptops, mobile phones, power banks, LED lights, and smart TVs must be registered under CRS before sale. BIS issues a registration number after verifying conformance to the relevant Indian Standard.",
        link: "https://www.bis.gov.in/index.php/product-certification/compulsory-registration-scheme/",
        color: "orange",
    },
    {
        icon: FileCheck2,
        title: "Foreign Manufacturers Certification Scheme (FMCS)",
        description:
            "FMCS enables foreign manufacturers to obtain BIS certification for products exported to India. The licence allows the use of the ISI mark and demonstrates conformity to Indian Standards, facilitating market access.",
        link: "https://www.bis.gov.in/index.php/product-certification/foreign-manufacturers-certification-scheme-fmcs/",
        color: "green",
    },
    {
        icon: Zap,
        title: "Hallmarking (Precious Metals)",
        description:
            "BIS Hallmarking certifies the purity of gold and silver jewellery. The Hallmark Unique ID (HUID) is a six-character alphanumeric code assigned to each piece of jewellery, enabling traceability and consumer assurance.",
        link: "https://www.bis.gov.in/index.php/hallmarking/",
        color: "yellow",
    },
];

const colorMap: Record<string, { card: string; icon: string; badge: string }> = {
    blue: {
        card: "border-blue-100 bg-blue-50 hover:border-blue-200",
        icon: "bg-blue-100 text-blue-700",
        badge: "bg-blue-100 text-blue-700",
    },
    orange: {
        card: "border-orange-100 bg-orange-50 hover:border-orange-200",
        icon: "bg-orange-100 text-orange-700",
        badge: "bg-orange-100 text-orange-700",
    },
    green: {
        card: "border-green-100 bg-green-50 hover:border-green-200",
        icon: "bg-green-100 text-green-700",
        badge: "bg-green-100 text-green-700",
    },
    yellow: {
        card: "border-yellow-100 bg-yellow-50 hover:border-yellow-200",
        icon: "bg-yellow-100 text-yellow-700",
        badge: "bg-yellow-100 text-yellow-700",
    },
};

const steps = [
    { step: "01", title: "Identify the Standard", detail: "Find the Indian Standard (IS) applicable to your product." },
    { step: "02", title: "Test the Product", detail: "Get the product tested at a BIS-recognised or BIS-owned laboratory." },
    { step: "03", title: "Apply to BIS", detail: "Submit the application online through the BIS portal with the test report." },
    { step: "04", title: "Factory Inspection", detail: "BIS inspects the manufacturing facility to verify process conformance." },
    { step: "05", title: "Licence / Registration Granted", detail: "BIS issues the licence or registration number upon successful evaluation." },
    { step: "06", title: "Surveillance", detail: "BIS conducts periodic market surveillance and factory audits." },
];

export default function CertificationPage() {
    return (
        <main className="min-h-screen bg-white text-[#17395f]">
            {/* HERO */}
            <section className="border-b border-[#17395f]/10 bg-[#f4f8fc]">
                <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0f4c81] shadow-sm">
                            <BadgeCheck size={20} strokeWidth={2} />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5f7c98]">
                            BIS Certification
                        </span>
                    </div>

                    <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#12365d] sm:text-5xl">
                        Certification Schemes
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#607b96]">
                        The Bureau of Indian Standards (BIS) operates several certification schemes to ensure
                        product quality and consumer safety across India. Find the scheme relevant to your product below.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/assistant?query=How%20to%20get%20BIS%20certification%20for%20my%20product"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b3e6a]"
                        >
                            <BookOpen size={16} />
                            Ask BIS Assistant
                        </Link>
                        <a
                            href="https://www.bis.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#17395f]/15 bg-white px-5 py-3 text-sm font-semibold text-[#355b7e] transition hover:bg-[#edf5fb]"
                        >
                            Official BIS Website
                            <ExternalLink size={15} />
                        </a>
                    </div>
                </div>
            </section>

            {/* SCHEME CARDS */}
            <section className="mx-auto max-w-6xl px-6 py-14">
                <h2 className="mb-8 text-2xl font-semibold text-[#12365d]">Certification Schemes</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {certificationTypes.map((cert) => {
                        const Icon = cert.icon;
                        const styles = colorMap[cert.color];
                        return (
                            <div
                                key={cert.title}
                                className={`rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${styles.card}`}
                            >
                                <div className="mb-4 flex items-start gap-4">
                                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}>
                                        <Icon size={22} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-base font-semibold leading-snug text-[#17395f]">
                                        {cert.title}
                                    </h3>
                                </div>

                                <p className="text-sm leading-7 text-[#52708a]">
                                    {cert.description}
                                </p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f4c81] transition hover:underline"
                                >
                                    Read official guidelines
                                    <ArrowUpRight size={15} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="border-t border-[#17395f]/10 bg-[#f4f8fc]">
                <div className="mx-auto max-w-6xl px-6 py-14">
                    <h2 className="mb-10 text-2xl font-semibold text-[#12365d]">How Certification Works</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map((s) => (
                            <div
                                key={s.step}
                                className="rounded-2xl border border-[#17395f]/10 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-3 text-3xl font-bold text-[#dce9f4]">{s.step}</div>
                                <h3 className="font-semibold text-[#17395f]">{s.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#6a839c]">{s.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-6 py-14">
                <div className="rounded-2xl border border-[#17395f]/10 bg-[#0f4c81] p-8 text-center shadow-lg">
                    <h2 className="text-2xl font-semibold text-white">Have a certification question?</h2>
                    <p className="mt-3 text-sm text-white/70">
                        Our BIS Assistant can answer your questions about certification eligibility, required standards, and the application process.
                    </p>
                    <Link
                        href="/assistant?query=How%20do%20I%20apply%20for%20BIS%20certification"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0f4c81] transition hover:bg-[#edf5fb]"
                    >
                        <BookOpen size={16} />
                        Ask the BIS Assistant
                    </Link>
                </div>
            </section>
        </main>
    );
}
