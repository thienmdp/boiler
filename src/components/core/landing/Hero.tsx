import Container from '@/components/global/container'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { Spotlight } from '@/components/ui/Spotlight'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <div>
        <Spotlight className='-left-10 -top-24 h-screen md:-left-32' fill='white' />
        <Spotlight className='left-full top-16 h-[70vh] w-[20vw]' fill='blue' />
        <Spotlight className='left-48 top-10 h-[70vh] w-[50vw]' fill='orange' />
      </div>
      <HeroHighlight>
        <section className='relative grid min-h-screen grid-cols-3 place-items-center px-4 md:-mt-16'>
          <div className='col-span-3 -mr-0 mt-32 flex w-full items-end justify-center md:col-span-1 md:-mr-14 md:mt-0'>
            <Image
              priority
              src={'/assets/icon.png'}
              width={400}
              height={400}
              alt='CVS'
              className='h-full w-2/3 max-w-[335px]'
            />
          </div>
          <div className='container z-10 col-span-3 select-none space-y-2 text-start max-sm:px-1 md:col-span-2 md:text-end'>
            <TextGenerateEffect
              className='w-full break-words text-[30px] sm:text-[40px] md:text-[52px]'
              words='The Center for Visualization & Simulation (CVS)'
            />
            <div className='!mt-8 indent-2 text-sm !leading-8 sm:text-lg md:indent-16 md:text-xl'>
              Chúng tôi là đơn vị tiên phong trong nghiên cứu và phát triển công nghệ mô phỏng 3D, ứng dụng những công
              nghệ tiên tiến nhất để tạo ra những trải nghiệm sống động và chân thực.
            </div>
          </div>
        </section>
      </HeroHighlight>
    </div>
  )
}
