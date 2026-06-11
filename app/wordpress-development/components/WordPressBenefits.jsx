"use client";

export default function WordPressBenefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "Performance Focused",
      desc: "Every project is optimized for Core Web Vitals. We target sub-2s load times as a baseline, not a bonus.",
    },
    {
      icon: "🔍",
      title: "SEO Friendly Development",
      desc: "Structured data, semantic HTML, sitemap automation — SEO best practices are baked in from day one.",
    },
    {
      icon: "✨",
      title: "Clean Code Standards",
      desc: "Modular, documented, WordPress Coding Standards–compliant code that any developer can maintain after us.",
    },
    {
      icon: "💼",
      title: "Business-Oriented Solutions",
      desc: "We ask 'why' before we ask 'how.' Every technical decision is connected to a measurable business outcome.",
    },
    {
      icon: "🤝",
      title: "Long-Term Support",
      desc: "We don't disappear after launch. Retainer plans keep your site updated, secure, and continuously improving.",
    },
    {
      icon: "📐",
      title: "Scalable Architecture",
      desc: "Systems designed to grow with you — from 100 visitors a month to 100,000 without a costly rebuild.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#12131c] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
                Why SoftLes
              </span>
            </div>
            <h2 className="service-section-heading mb-4">
              Why Work With SoftLes
            </h2>
            <p className="text-[#BCC1CA]/80 mb-6 sm:mb-8 max-w-md text-sm sm:text-base leading-relaxed">
              We&apos;re not just developers — we&apos;re a strategic partner committed to
              your long-term business success.
            </p>
            <a
              href="/#book-call"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-4 bg-[#DC4242] text-white font-bold rounded-full hover:bg-[#ff4d50] transition-all duration-300 text-base whitespace-nowrap shadow-[inset_0_0_0_2px_transparent] group"
            >
              Start a Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Benefits Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="text-2xl">{benefit.icon}</div>
                <h4 className="text-[#FFFFFF] font-semibold text-sm">
                  {benefit.title}
                </h4>
                <p className="text-[#BCC1CA]/70 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
