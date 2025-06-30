"use client";
import { motion } from 'framer-motion';

const floatingElements = [
  { emoji: "🌟", size: "text-3xl", delay: 0 },
  { emoji: "✨", size: "text-2xl", delay: 0.3 },
  { emoji: "💫", size: "text-4xl", delay: 0.6 },
];

export default function FloatingAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ 
            y: 0,
            x: Math.random() * window.innerWidth,
            opacity: 0
          }}
          animate={{ 
            y: [0, -100, -200, -300],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
            opacity: [0, 1, 1, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear"
          }}
          className={`absolute ${item.size} bottom-0`}
          style={{ left: `${10 + index * 30}%` }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}