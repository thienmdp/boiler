'use client'
import Container from '@/components/global/container'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { WavyBackground } from '@/components/ui/wavy-background'
import { useTheme } from 'next-themes'
import React from 'react'

const instructors = [
  {
    id: 1,
    name: 'MSc. Chung Le Van',
    designation: 'Director',
    image: 'http://cvs.duytan.edu.vn/wp-content/uploads/2018/04/levanchung-380x380.jpg'
  },
  {
    id: 2,
    name: 'MSc. Hoa Trinh Hiep',
    designation: 'Technology Leader',
    image: 'http://cvs.duytan.edu.vn/wp-content/uploads/2018/04/trinhhiephoa-380x380.jpg'
  },
  {
    id: 3,
    name: 'MSc. Duc Nguyen Minh',
    designation: 'Team Leader',
    image: 'http://cvs.duytan.edu.vn/wp-content/uploads/2018/04/NguyenMinhDuc-380x380.png'
  },
  {
    id: 4,
    name: 'BSc. Huan Chau Cong',
    designation: 'Developer',
    image:
      'http://cvs.duytan.edu.vn/wp-content/uploads/2019/07/26166539_824498371055228_1680186721811178213_n-380x353.jpg'
  }
]

export default function Contact() {
  const { theme } = useTheme()
  return (
    <section id='contact' className='w-full'>
      <Container className='relative flex h-[40rem] w-full items-center justify-center overflow-hidden'>
        <WavyBackground
          backgroundFill={theme === 'light' ? '#fff' : '#000414'}
          className='mx-auto flex h-full w-full flex-col items-center justify-center'
        >
          <h2 className='mb-8 text-center text-2xl font-bold md:text-4xl lg:text-7xl'>Liên hệ</h2>
          <p className='mb-10 text-center text-base md:text-lg'>
            Gặp gỡ các chuyên gia tài năng, những người sẽ đồng hành cùng dự án của bạn
          </p>
          <div className='mb-10 flex w-full flex-row items-center justify-center'>
            <AnimatedTooltip items={instructors} />
          </div>
        </WavyBackground>
      </Container>
    </section>
  )
}
