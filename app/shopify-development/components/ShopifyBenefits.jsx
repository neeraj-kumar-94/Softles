"use client";

export default function ShopifyBenefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Conversion Focused",
      desc: "Every design and development decision is informed by CRO best practices and your specific customer journey data.",
    },
    {
      icon: "⭐",
      title: "Shopify Plus Experience",
      desc: "Hands-on experience with Scripts, Flow, Launchpad, B2B Commerce, Markets, and multi-storefront architecture.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      desc: "Sub-2s page loads and strong Core Web Vitals scores as a baseline on every project — not optional extras.",
    },
    {
      icon: "📐",
      title: "Scalable Architecture",
      desc: "Systems designed to grow from launch to 100k daily orders without expensive platform migrations or rebuilds.",
    },
    {
      icon: "✨",
      title: "Clean Dev Standards",
      desc: "Documented, maintainable Liquid and React code that any developer can confidently continue after our engagement ends.",
    },
    {
      icon: "🤝",
      title: "Long-Term Support",
      desc: "We don't disappear after launch. Flexible retainers provide ongoing development, security patches, and growth support.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#12131c] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
                Why SoftLes
              </span>
            </div>
            <h2 className="service-section-heading mb-4">
              Why Partner With SoftLes
            </h2>
            <p className="text-[#BCC1CA]/80 mb-6 sm:mb-8 max-w-md text-sm sm:text-base leading-relaxed">
              We bring commercial thinking to every Shopify engagement. Your store&apos;s revenue metrics are our KPIs — not just the number of tickets closed.
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
