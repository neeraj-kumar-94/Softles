"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Empathize from "@/public/Empathize.png";
import Define from "@/public/Define.png";
import Ideate from "@/public/Ideate.png";
import Prototype from "@/public/Prototype.png";
import Test from "@/public/Test.png";
import ServiceCard from "./ServiceCard";
import StepConnector from "./StepConnector";
import useStepSequence from "./useStepSequence";

const EASE = [0.22, 1, 0.36, 1];

// Generic process icons, mapped to steps by position (same set as the
// homepage "Our Approach" section).
const stepIcons = [Empathize, Define, Ideate, Prototype, Test];

// Homepage "Our Approach" UI, reused across service pages:
// desktop — overlapping circle cards; mobile/tablet — icon card stack.
export default function ProcessSteps({ steps }) {
  const flow = useStepSequence(steps.length);

  return (
    <>
      {/* Mobile & tablet: card stack */}
      <div className="block xl:hidden w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num ?? idx}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: EASE }}
              className="group relative overflow-hidden flex flex-col gap-3 p-5 rounded-2xl bg-[#181B23] border border-[#2E3446] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4D57]/40 hover:bg-[#1a1e2a]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,77,87,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 mb-3 rounded-xl flex items-center justify-center bg-[rgba(255,77,87,0.08)] border border-[rgba(255,77,87,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#FF4D57]/50">
                  <Image
                    src={stepIcons[idx % stepIcons.length]}
                    alt={`Process step icon for ${step.title}`}
                    width={32}
                    height={32}
                  />
                </div>

                <span className="text-xs text-[#FF4D57] font-semibold uppercase tracking-wider">
                  Step {step.num}
                </span>

                <h3 className="mt-1 text-lg font-semibold text-white leading-snug group-hover:text-[#FF4D57] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-[#C7CCD6] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: overlapping circle cards */}
      <div
        ref={flow.ref}
        onMouseLeave={() => flow.setHovered(null)}
        className="relative w-full hidden xl:flex flex-wrap xl:flex-row justify-around xl:justify-between items-center gap-5 lg:gap-0 px-[10px] lg:px-0"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.num ?? idx}
            initial={{ opacity: 0, y: 48, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: idx * 0.14, ease: EASE }}
            onMouseEnter={() => flow.setHovered(idx)}
            className="relative"
            style={{ zIndex: flow.activeIdx === idx ? 50 : steps.length - idx }}
          >
            <ServiceCard
              link="#"
              bg={idx % 2 === 0 ? "lg:bg-[#0E1219]" : "lg:bg-[#111319]"}
              hover="hover:ring-2 hover:ring-[#FF4D57]/40 hover:scale-105"
              zIndex={steps.length - idx}
              source={stepIcons[idx % stepIcons.length]}
              name={step.title}
              alt={`${step.title} process step icon`}
              step={step.num}
              index={idx}
              active={flow.activeIdx === idx}
              playing={flow.playingIdx === idx}
              reached={flow.played > idx}
              paused={flow.paused}
              stepMs={flow.stepMs}
              onRingDone={flow.advance}
              dimmed={flow.hovered !== null && flow.hovered !== idx}
              description={step.desc}
            />
            {idx < steps.length - 1 && (
              <StepConnector lit={flow.played > idx} />
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}
