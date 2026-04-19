"use client";

import { motion } from "framer-motion";

/**
 * A Japan-inspired decorative SVG composition for the hero.
 * Combines thin concentric circles (ensō influence) with a grid
 * and stylised kanji 日本 as a watermark behind clean line art.
 */
export function JapanMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Fine grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e8e5e0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <motion.rect
          width="480" height="480" fill="url(#grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        />

        {/* Large watermark kanji 日本 */}
        <motion.text
          x="50%" y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="220"
          fontWeight="200"
          fill="#1a1918"
          fillOpacity="0.04"
          letterSpacing="-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          日本
        </motion.text>

        {/* Concentric thin circles — ensō influence */}
        {[200, 160, 120, 80, 44].map((r, i) => (
          <motion.circle
            key={r}
            cx="240" cy="240" r={r}
            stroke="#1a1918"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: "easeOut" }}
          />
        ))}

        {/* Crosshair fine lines */}
        <motion.line
          x1="240" y1="20" x2="240" y2="460"
          stroke="#1a1918" strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.line
          x1="20" y1="240" x2="460" y2="240"
          stroke="#1a1918" strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        {/* Diagonal accent lines */}
        <motion.line
          x1="90" y1="90" x2="390" y2="390"
          stroke="#1e3557" strokeWidth="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.18 }}
          transition={{ duration: 1.1, delay: 0.9 }}
        />
        <motion.line
          x1="390" y1="90" x2="90" y2="390"
          stroke="#1e3557" strokeWidth="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.18 }}
          transition={{ duration: 1.1, delay: 1.0 }}
        />

        {/* Center dot */}
        <motion.circle
          cx="240" cy="240" r="3.5"
          fill="#1e3557"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />

        {/* Cardinal dots */}
        {[[240, 40], [240, 440], [40, 240], [440, 240]].map(([x, y], i) => (
          <motion.circle
            key={i} cx={x} cy={y} r="2"
            fill="#9a9895"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.3, delay: 1.2 + i * 0.08 }}
          />
        ))}
      </svg>
    </div>
  );
}

/** Subtle shoji-screen horizontal rule with dot */
export function ShojRule({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="h-px bg-[#e0ddd8] flex-1"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      />
      <motion.div
        className="w-1 h-1 rounded-full bg-[#1e3557]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3, delay: delay + 0.7 }}
      />
      <motion.div
        className="h-px bg-[#e0ddd8] w-8"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay + 0.5 }}
      />
    </div>
  );
}
