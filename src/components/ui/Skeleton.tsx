'use client'
import Image from 'next/image'
import { Icons } from './icons'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe } from './globe'

export const SkeletonOne = () => {
  return (
    <div className='relative flex gap-10'>
      <div className='group mx-auto w-full bg-white p-5 shadow-2xl dark:bg-black-200'>
        <div className='flex w-full flex-1 flex-col space-y-2'>
          <Image
            src='/assets/nhantaidatviet_2017.png'
            alt='header'
            width={200}
            height={200}
            className='aspect-square max-h-[450px] w-full rounded-sm object-cover object-left-top'
          />
        </div>
      </div>

      <div className='pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black' />
      <div className='pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black' />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <Link
      href='https://www.youtube.com/watch?v=N_yQ1WVdvGE'
      target='__blank'
      className='group/image relative flex h-full gap-10'
    >
      <div className='group mx-auto h-full w-full bg-transparent dark:bg-transparent'>
        <div className='relative flex h-full w-full flex-1 flex-col space-y-2'>
          <Icons.youtube className='absolute inset-0 z-10 m-auto h-20 w-20 text-red-500' />
          <Image
            src='/assets/nhantaidatviet_2017.png'
            alt='header'
            width={800}
            height={800}
            className='aspect-square h-full w-full rounded-sm object-cover object-center blur-none transition-all duration-200 group-hover/image:blur-md'
          />
        </div>
      </div>
    </Link>
  )
}

export const SkeletonTwo = () => {
  const rotations = [3.07, -5.36, 4.5]
  const images = [
    '/assets/nhantaidatviet_2017.png',
    '/assets/nhantaidatviet_2017.png',
    '/assets/nhantaidatviet_2017.png'
  ]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    }
  }
  return (
    <div className='relative flex h-full flex-col items-center justify-start gap-10 overflow-hidden p-8'>
      <div className='flex flex-row'>
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={'images-first' + idx}
            style={{ rotate: rotations[idx % rotations.length] }}
            whileHover='whileHover'
            whileTap='whileTap'
            className='-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'
          >
            <Image
              src={image}
              alt='bali images'
              width='500'
              height='500'
              className='h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40'
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-row'>
        {images.map((image, idx) => (
          <motion.div
            key={'images-second' + idx}
            style={{ rotate: rotations[idx % rotations.length] }}
            variants={imageVariants}
            whileHover='whileHover'
            whileTap='whileTap'
            className='-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'
          >
            <Image
              src={image}
              alt='bali images'
              width='500'
              height='500'
              className='h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40'
            />
          </motion.div>
        ))}
      </div>

      <div className='pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black' />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className='relative mt-10 flex h-60 flex-col items-center bg-transparent dark:bg-transparent md:h-60'>
      <Globe className='absolute -bottom-80 -right-10 md:-bottom-72 md:-right-10' />
    </div>
  )
}
