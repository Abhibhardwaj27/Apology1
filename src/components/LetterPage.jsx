"use client"

import { motion } from "framer-motion"

export default function LetterPage() {
  const handleContinue = () => {
    // Intentionally left blank – letter is the final page in the flow
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl text-emerald-800 mb-4 mt-10 md:mt-0"
        >
          
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl text-slate-700 leading-relaxed"
          >
            Oii, sorrry aise respond krne ke lie i did not realize It.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto"
          >
            Meko sahi mein thoda soch lena chahiye tha and i promise you this wont be repeated again I promise, Its just i was in sleep as well and teko baat krni thi tho i felt ki i should have been there tho mein thoda sochne lag gaya and then aage jo hua vo hua, I really hope tu samjhe ki i am always available there sahi mein and teko aise majboori mein message na krna pade and please aise message mat krdio sahi mein, meko hi seedha call krlia kr, chal lets forget it and i am really sorry. I hope tera mood sahi hue mere saath ye padhke aur dekh ke.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-emerald-800 text-xl mt-6"
          >
            Can you please forgive me…?💔
          </motion.p>

        </motion.div>

        <motion.button
          onClick={handleContinue}
          className="mt-10 mb-10 md:mb-0 px-10 py-4 bg-gradient-to-r from-emerald-200 to-sky-200 backdrop-blur-sm border border-emerald-300/60 rounded-full text-emerald-900 text-lg hover:from-emerald-300 hover:to-sky-300 transition-all duration-300 shadow-lg shadow-emerald-100"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 25px rgba(16, 185, 129, 0.25)",
            y: -1,
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          I need you...
        </motion.button>
      </motion.div>
    </div>
  )
}
