"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import StarryBackground from "@/components/StarryBackground"
import OpeningPage from "@/components/OpeningPage"
import DiaryPage from "@/components/DiaryPage"
import ApologyPage from "@/components/ApologyPage"
import LetterPage from "@/components/LetterPage"
// HugPage and GiftPage are kept in the project but no longer used in the main flow

export default function Home() {
  const [currentPage, setCurrentPage] = useState("opening")

  const pages = {
    opening: OpeningPage,
    diary: DiaryPage,
    apology: ApologyPage,
    letter: LetterPage,
  }

  const CurrentComponent = pages[currentPage]

  const pageVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    in: { opacity: 1, y: 0, scale: 1 },
    out: { opacity: 0, y: -30, scale: 1.05 },
  }

  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6,
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50 relative overflow-hidden text-slate-800">
      <StarryBackground />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-10"
        >
          <CurrentComponent
            setCurrentPage={setCurrentPage}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
