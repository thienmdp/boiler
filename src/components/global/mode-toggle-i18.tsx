'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Icons } from '@/components/ui/icons'
import { useTranslation } from 'react-i18next'

export function ModeToggleI18n() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = React.useState(i18n.language)

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'vi' : 'en'
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
  }

  return (
    <Button variant='ghost' size='icon' className='relative rounded-full' onClick={toggleLanguage}>
      <motion.div
        key='vietnam-icon'
        initial={{ opacity: 1, rotate: 0, scale: 1 }}
        animate={{
          opacity: language === 'vi' ? 1 : 0,
          rotate: language === 'vi' ? 0 : 90,
          scale: language === 'vi' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <Icons.vietnam className='h-[1.2rem] w-[1.2rem]' />
      </motion.div>

      <motion.div
        key='english-icon'
        initial={{ opacity: 0, rotate: 90, scale: 0 }}
        animate={{
          opacity: language === 'en' ? 1 : 0,
          rotate: language === 'en' ? 0 : 90,
          scale: language === 'en' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className='absolute'
      >
        <Icons.english className='h-[1.2rem] w-[1.2rem]' />
      </motion.div>

      <span className='sr-only'>Toggle Language</span>
    </Button>
  )
}
