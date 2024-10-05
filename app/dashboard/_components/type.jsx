"use client";
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Embrace -",
    },
    {
      text: "The -",
    },
    {
      text: "Future -",
    },
    {
      text: "Of -",
    },
    {
      text: " Speech AI.  ",
      className: "text-purple-600",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] test">
      <p className="text-neutral-200 text-xs sm:text-base">
        Hello,
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
