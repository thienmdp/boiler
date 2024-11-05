'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/Spotlight'

const AnimatedBackground = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='fixed inset-0 overflow-hidden'>
      <Spotlight className='left-0 top-40 md:-top-32 md:left-60' fill='white' />

      <div className='bg-[radial-gradient(circle_at_50%_50%,rgba(25, 0, 255, 0.1),transparent_70%)] absolute inset-0' />
      {isClient &&
        Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute h-2 w-2 rounded-full bg-blue-500/20'
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
    </div>
  )
}

export default AnimatedBackground
