'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/global/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import path from '@/constants/path'

export const PublicNavbar = ({
  navItems,
  className
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!
      if (scrollYProgress.get() < 0.06) {
        setVisible(true)
      } else {
        if (direction > 0) {
          setVisible(false)
        }
      }
    }
  })

  useEffect(() => {
    console.log(pathname)
    setVisible(true)
  }, [pathname])

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: 30
        }}
        animate={{
          y: visible ? 0 : 30,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
        className={cn(
          `${visible ? 'max-w-full !border-none !bg-transparent !shadow-none' : 'max-w-fit rounded-full'} fixed inset-x-0 top-0 z-[5000] mx-auto flex items-center justify-center space-x-4 border border-white/[0.2] bg-gray-100/80 px-10 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-black-100/80`,
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={pathname !== path.landing ? path.landing : navItem.link}
            className={cn(buttonVariants({ variant: 'linkHover2' }))}
          >
            <span className='block sm:hidden'>{navItem.icon}</span>
            <span className='!cursor-pointer text-sm font-semibold'>{navItem.name}</span>
          </Link>
        ))}
        <ModeToggle />
        {/* <Link key={`link=login`} href={path.signin} className={cn(buttonVariants({ variant: 'linkHover2' }))}>
          <span className='block sm:hidden'>{navItem.icon}</span>
          <span className='!cursor-pointer text-sm font-semibold'>Login</span>
        </Link> */}
      </motion.div>
    </AnimatePresence>
  )
}
