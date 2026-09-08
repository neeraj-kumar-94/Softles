"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// What the monitor in the illustration is showing, per page.
const SCREEN_SUBJECT = {
  wordpress: "a WordPress site",
  shopify: "a Shopify store",
  design: "a design prototype",
  integrations: "a connected workflow",
};

// Spotlight-editorial hero shared by every service page: left — reveal copy
// with a looping gradient-fill word; right — flat SVG studio illustration
// (whiteboard, character, monitor) in the homepage style.
export default function EditorialHero({
  eyebrow,
  thin,
  name,
  mid = "that",
  fillWord,
  sub,
  projectsLabel,
  variant = "wordpress",
}) {
  return (
    <section className="eh relative w-full overflow-hidden bg-[#0A0D13] flex items-center min-h-screen lg:min-h-[92vh] pt-28 pb-16 lg:pt-20 lg:pb-0">
      {/* swinging spotlight cone + indigo corner glow + film grain */}
      <div aria-hidden="true" className="eh-spot" />
      <div aria-hidden="true" className="eh-spot2" />
      <div
        aria-hidden="true"
        className="eh-noise"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.6\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="service-page-container relative z-[2] w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          {/* Left: copy */}
          <div className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="eh-r eh-r1 flex items-center gap-3 text-[#8b93a5] text-xs tracking-[0.28em] uppercase">
              <span aria-hidden="true" className="w-11 h-px bg-[#FF4D57]" />
              {eyebrow}
            </div>

            <h1 className="eh-r eh-r2 mt-6 font-bold text-4xl sm:text-6xl lg:text-[44px] xl:text-[52px] leading-[1.08] tracking-[-0.035em] text-white">
              <span className="font-light text-[#aab0be]">{thin}</span> {name}
              <br />
              {mid}{" "}
              <span className="eh-fillw">
                {fillWord}
                <i aria-hidden="true">{fillWord}</i>
              </span>
            </h1>

            <p className="eh-r eh-r3 mt-6 text-[#8f97a8] text-base leading-[1.75] max-w-md">
              {sub}
            </p>

            <div className="eh-r eh-r4 mt-9 flex flex-col sm:flex-row items-center gap-6">
              <Link href="/#book-call" className="eh-btn softles-primary-button relative overflow-hidden !text-xs md:!text-sm whitespace-nowrap group">
                <span>Book free discovery call</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
              <a
                href="#projects"
                className="text-[#C7CCD6] text-sm font-semibold border-b border-[#2E3446] pb-1 transition-colors duration-300 hover:text-white hover:border-[#FF4D57]"
              >
                {projectsLabel}
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="eh-rail w-full max-w-[440px] lg:max-w-[450px] xl:max-w-[520px] shrink-0 mx-auto lg:mx-0">
            <svg className="eh-illo w-full h-auto" viewBox="0 0 560 430" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`Illustration of a designer planning on a whiteboard and building ${SCREEN_SUBJECT[variant] || "a website"} on a monitor`}>
              <defs>
                <radialGradient id={`eh-sg-${variant}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF4D57" stopOpacity=".28" />
                  <stop offset="100%" stopColor="#FF4D57" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* screen glow + ground shadows */}
              <ellipse className="eh-glowp" cx="453" cy="206" rx="130" ry="86" fill={`url(#eh-sg-${variant})`} />
              <ellipse cx="322" cy="419" rx="42" ry="5" fill="#000" opacity=".3" />
              <ellipse cx="440" cy="423" rx="105" ry="6" fill="#000" opacity=".28" />
              <ellipse cx="42" cy="416" rx="30" ry="4.5" fill="#000" opacity=".3" />
              <ellipse cx="160" cy="256" rx="40" ry="4" fill="#000" opacity=".22" />

              {/* whiteboard */}
              <rect x="40" y="30" width="260" height="170" rx="8" stroke="#E8EAF0" strokeWidth="3" fill="#151A25" />
              <line x1="150" y1="200" x2="128" y2="252" stroke="#E8EAF0" strokeWidth="3" />
              <line x1="170" y1="200" x2="192" y2="252" stroke="#E8EAF0" strokeWidth="3" />
              <rect x="62" y="52" width="90" height="58" rx="4" stroke="#8b93a5" strokeWidth="2" />
              <line x1="70" y1="66" x2="144" y2="66" stroke="#8b93a5" strokeWidth="2" />
              <line x1="70" y1="78" x2="130" y2="78" stroke="#556" strokeWidth="2" />
              <line x1="70" y1="90" x2="138" y2="90" stroke="#556" strokeWidth="2" />
              <rect x="62" y="122" width="90" height="52" rx="4" stroke="#8b93a5" strokeWidth="2" />
              <line x1="70" y1="136" x2="140" y2="136" stroke="#556" strokeWidth="2" />
              <line x1="70" y1="148" x2="126" y2="148" stroke="#556" strokeWidth="2" />
              <path d="M160 80 C190 70 200 90 220 84" stroke="#8b93a5" strokeWidth="2" fill="none" />
              <path d="M216 78 L222 84 L214 88" stroke="#8b93a5" strokeWidth="2" fill="none" />
              <rect className="eh-stick" x="232" y="58" width="26" height="26" rx="3" fill="#FF4D57" />
              <rect className="eh-stick eh-stick2" x="232" y="100" width="26" height="26" rx="3" fill="#FF6A3D" />
              <rect x="232" y="142" width="26" height="26" rx="3" fill="#2E3446" stroke="#8b93a5" strokeWidth="1.5" />
              <path d="M236 178 q8 -6 16 0 q8 6 16 0" stroke="#FF4D57" strokeWidth="2.5" fill="none" strokeLinecap="round" />

              {/* idea flow: board se monitor tak travelling dots */}
              <path className="eh-flow" d="M308 96 C365 52 420 70 452 138" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".5" />
              {/* twinkling sparks */}
              <g strokeWidth="2" strokeLinecap="round">
                <path className="eh-twk" d="M26 52 v10 M21 57 h10" stroke="#FF4D57" />
                <path className="eh-twk eh-twk2" d="M330 30 v8 M326 34 h8" stroke="#FF6A3D" />
                <path className="eh-twk eh-twk3" d="M552 130 v8 M548 134 h8" stroke="#6D5EF6" />
              </g>

              {/* desk */}
              <rect x="330" y="292" width="220" height="10" rx="5" fill="#E8EAF0" />
              <line x1="348" y1="302" x2="342" y2="420" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />
              <line x1="532" y1="302" x2="538" y2="420" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />
              <path d="M352 240 q0 -14 14 -14 h30 q14 0 14 14 v52 h-58 z" fill="#FF4D57" />
              <line x1="381" y1="302" x2="381" y2="368" stroke="#E8484F" strokeWidth="7" />
              <path d="M355 405 L381 372 L407 405" stroke="#E8484F" strokeWidth="7" fill="none" strokeLinecap="round" />

              {/* monitor */}
              <rect x="368" y="150" width="170" height="118" rx="10" fill="#0b0d12" stroke="#E8EAF0" strokeWidth="3" />
              <circle cx="384" cy="166" r="3.5" fill="#FF5F57" />
              <circle cx="396" cy="166" r="3.5" fill="#FEBC2E" />
              <circle cx="408" cy="166" r="3.5" fill="#28C840" />
              <line x1="368" y1="178" x2="538" y2="178" stroke="#2E3446" strokeWidth="2" />

              {/* on-screen logo — variant */}
              {variant === "wordpress" && (
                <>
                  <circle cx="424" cy="220" r="24" fill="#0E1219" stroke="#FF4D57" strokeWidth="3" />
                  <path d="M411 211 L418 231 L424 214 L430 231 L437 211" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </>
              )}
              {variant === "shopify" && (
                <>
                  <rect x="404" y="206" width="40" height="34" rx="6" fill="#0E1219" stroke="#FF4D57" strokeWidth="3" />
                  <path d="M415 206 v-5 a9 9 0 0 1 18 0 v5" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="416" cy="216" r="1.8" fill="#FF4D57" />
                  <circle cx="432" cy="216" r="1.8" fill="#FF4D57" />
                </>
              )}
              {variant === "design" && (
                <>
                  {/* artboard with a selected frame and handles */}
                  <rect x="400" y="200" width="48" height="42" rx="4" fill="#0E1219" stroke="#FF4D57" strokeWidth="3" />
                  <path d="M400 213 h48" stroke="#FF4D57" strokeWidth="2" opacity=".55" />
                  <circle cx="400" cy="200" r="3.5" fill="#0E1219" stroke="#FF6A3D" strokeWidth="2.5" />
                  <circle cx="448" cy="200" r="3.5" fill="#0E1219" stroke="#FF6A3D" strokeWidth="2.5" />
                  <circle cx="400" cy="242" r="3.5" fill="#0E1219" stroke="#FF6A3D" strokeWidth="2.5" />
                  <circle cx="448" cy="242" r="3.5" fill="#0E1219" stroke="#FF6A3D" strokeWidth="2.5" />
                </>
              )}
              {variant === "integrations" && (
                <>
                  {/* three nodes wired into one */}
                  <circle cx="406" cy="206" r="6" fill="#0E1219" stroke="#FF4D57" strokeWidth="3" />
                  <circle cx="406" cy="236" r="6" fill="#0E1219" stroke="#FF4D57" strokeWidth="3" />
                  <circle cx="446" cy="221" r="8" fill="#0E1219" stroke="#FF6A3D" strokeWidth="3" />
                  <path d="M412 208 q18 2 26 11" stroke="#FF4D57" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M412 234 q18 -2 26 -11" stroke="#FF4D57" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </>
              )}

              {/* typing bars + caret */}
              <rect className="eh-type" x="458" y="202" width="52" height="8" rx="4" fill="#2E3446" />
              <rect className="eh-type eh-t2" x="458" y="218" width="40" height="8" rx="4" fill="#2E3446" />
              <rect className="eh-type eh-t3" x="458" y="234" width="48" height="8" rx="4" fill="#FF4D57" opacity=".75" />
              <rect className="eh-curs" x="512" y="231" width="2.5" height="13" fill="#FF6A3D" />

              {/* monitor stand + desk items */}
              <rect x="442" y="268" width="22" height="17" fill="#E8EAF0" />
              <rect x="424" y="285" width="58" height="7" rx="3.5" fill="#E8EAF0" />
              <rect x="386" y="283" width="64" height="7" rx="3.5" fill="#8b93a5" />
              <circle cx="466" cy="287" r="4" fill="#8b93a5" />
              <rect x="500" y="272" width="16" height="19" rx="2.5" fill="#E8EAF0" />
              <path d="M516 276 q9 4 0 11" stroke="#E8EAF0" strokeWidth="2.5" fill="none" />
              <path className="eh-steam" d="M506 266 q4 -6 0 -12 M512 266 q4 -6 0 -12" stroke="#8b93a5" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* wall frame + books */}
              <rect x="486" y="52" width="58" height="44" rx="4" stroke="#8b93a5" strokeWidth="2" fill="#151A25" />
              <path d="M492 88 l13 -15 9 9 8 -11 12 17" stroke="#FF4D57" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="531" cy="63" r="4" fill="#FF6A3D" />
              <rect x="520" y="284" width="30" height="8" rx="2" fill="#FF6A3D" />
              <rect x="524" y="276" width="24" height="8" rx="2" fill="#6D5EF6" />

              {/* character writing at the board */}
              <g>
                <line x1="312" y1="316" x2="307" y2="404" stroke="#FF4D57" strokeWidth="11" />
                <line x1="330" y1="316" x2="335" y2="404" stroke="#FF4D57" strokeWidth="11" />
                <rect x="296" y="404" width="22" height="10" rx="5" fill="#E8EAF0" />
                <rect x="326" y="404" width="22" height="10" rx="5" fill="#E8EAF0" />
                <path d="M302 322 v-60 q0 -20 19 -20 q19 0 19 20 v60 z" fill="#262E3E" />
                <g className="eh-arm">
                  <line x1="308" y1="256" x2="266" y2="192" stroke="#262E3E" strokeWidth="10" strokeLinecap="round" />
                  <circle cx="264" cy="189" r="6" fill="#EFC3A0" />
                  <line x1="262" y1="186" x2="255" y2="175" stroke="#E8EAF0" strokeWidth="3.5" strokeLinecap="round" />
                </g>
                <circle cx="321" cy="228" r="14" fill="#EFC3A0" />
                <path d="M306 226 q-2 -16 15 -16 q16 0 15 14 q-8 -8 -30 2z" fill="#1a2029" />
              </g>

              {/* plant */}
              <path d="M36 330 q14 -46 -6 -74" stroke="#FF4D57" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M42 330 q2 -40 26 -60" stroke="#FF4D57" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M30 256 q14 4 12 22 q-16 -2 -12 -22z" fill="#FF4D57" />
              <path d="M68 270 q-2 16 -16 20 q0 -18 16 -20z" fill="#FF4D57" />
              <path d="M52 246 q10 10 2 26 q-12 -10 -2 -26z" fill="#FF6A3D" />
              <path d="M18 344 h48 l-6 56 q0 12 -18 12 t-18 -12 z" fill="#E8EAF0" />
              <line x1="10" y1="420" x2="550" y2="420" stroke="#2E3446" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .eh-spot {
          position: absolute;
          top: -42vh;
          left: -12vw;
          width: 90vw;
          height: 150vh;
          pointer-events: none;
          background: conic-gradient(
            from 100deg at 50% 0%,
            transparent 42%,
            rgba(255, 255, 255, 0.09) 49%,
            rgba(255, 77, 87, 0.1) 52%,
            rgba(255, 255, 255, 0.07) 55%,
            transparent 62%
          );
          filter: blur(28px);
          transform-origin: 50% 0;
          animation: ehSwing 11s ease-in-out infinite;
        }
        @keyframes ehSwing {
          0%, 100% { transform: rotate(-4deg); opacity: 0.85; }
          50% { transform: rotate(5deg); opacity: 1; }
        }
        .eh-spot2 {
          position: absolute;
          bottom: -30vh;
          right: -16vw;
          width: 60vw;
          height: 60vh;
          background: radial-gradient(closest-side, rgba(109, 94, 246, 0.1), transparent);
          filter: blur(40px);
          pointer-events: none;
        }
        .eh-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
        }

        .eh-r {
          opacity: 0;
          transform: translateY(26px);
          animation: ehUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .eh-r1 { animation-delay: 0.05s; }
        .eh-r2 { animation-delay: 0.22s; }
        .eh-r3 { animation-delay: 0.42s; }
        .eh-r4 { animation-delay: 0.6s; }
        @keyframes ehUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .eh-fillw {
          position: relative;
          display: inline-block;
          -webkit-text-stroke: 1.5px #ff4d57;
          color: transparent;
        }
        .eh-fillw i {
          position: absolute;
          inset: 0;
          font-style: normal;
          -webkit-text-stroke: 0;
          background: linear-gradient(90deg, #ff4d57, #ff6a3d);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          clip-path: inset(0 100% 0 0);
          animation: ehFill 4.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        @keyframes ehFill {
          0%, 12% { clip-path: inset(0 100% 0 0); }
          45%, 68% { clip-path: inset(0 0 0 0); }
          94%, 100% { clip-path: inset(0 100% 0 0); }
        }

        .eh-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 20%, rgba(255, 255, 255, 0.35) 50%, transparent 80%);
          transform: translateX(-120%);
          animation: ehShine 3.8s ease-in-out infinite 1.6s;
        }
        @keyframes ehShine {
          0% { transform: translateX(-120%); }
          45%, 100% { transform: translateX(130%); }
        }

        .eh-rail {
          opacity: 0;
          animation: ehIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
        }
        @keyframes ehIn {
          to { opacity: 1; }
        }
        .eh-illo {
          animation: ehFloat 8s ease-in-out infinite;
        }
        @keyframes ehFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .eh-stick { animation: ehStickP 4s ease-in-out infinite; }
        .eh-stick2 { animation-delay: 1.2s; }
        @keyframes ehStickP {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        .eh-type {
          opacity: 0;
          animation: ehTypeIn 4.8s ease-in-out infinite;
        }
        .eh-t2 { animation-delay: 0.7s; }
        .eh-t3 { animation-delay: 1.4s; }
        @keyframes ehTypeIn {
          0% { opacity: 0; }
          12%, 72% { opacity: 1; }
          86%, 100% { opacity: 0; }
        }
        .eh-arm {
          transform-origin: 352px 258px;
          animation: ehWrite 2.2s ease-in-out infinite;
        }
        @keyframes ehWrite {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3.5deg); }
        }
        .eh-steam {
          stroke-dasharray: 20;
          animation: ehSteamUp 3.2s linear infinite;
          opacity: 0.5;
        }
        @keyframes ehSteamUp {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .eh-glowp { animation: ehGlowP 5s ease-in-out infinite; }
        @keyframes ehGlowP {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        .eh-curs { animation: ehBlink 1.1s steps(1) infinite; }
        @keyframes ehBlink {
          0%, 55% { opacity: 1; }
          56%, 100% { opacity: 0; }
        }
        .eh-flow {
          stroke-dasharray: 2 10;
          animation: ehFlowMove 2.6s linear infinite;
        }
        @keyframes ehFlowMove {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }
        .eh-twk { animation: ehTwinkle 3.6s ease-in-out infinite; }
        .eh-twk2 { animation-delay: 1.2s; }
        .eh-twk3 { animation-delay: 2.3s; }
        @keyframes ehTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .eh-spot, .eh-illo, .eh-stick, .eh-type, .eh-arm, .eh-steam,
          .eh-glowp, .eh-curs, .eh-flow, .eh-twk, .eh-fillw i, .eh-btn::after {
            animation: none !important;
          }
          .eh-r, .eh-rail { animation: none !important; opacity: 1; transform: none; }
          .eh-type { opacity: 1; }
          .eh-fillw i { clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </section>
  );
}
