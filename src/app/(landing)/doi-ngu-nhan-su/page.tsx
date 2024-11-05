'use client'

import { FocusCards } from '@/components/ui/focus-cards'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'

const AnimatedBackground = dynamic(() => import('@/components/ui/AnimatedBackground'), { ssr: false })

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const instructorsFocusCard = [
    {
      id: 1,
      title: 'MSc. Chung Le Van',
      designation: 'Director',
      // src: '/assets/levanchung.png'
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/26-1-2021-8-54-15-65.JPG'
    },
    {
      id: 2,
      title: 'MSc. Hoa Trinh Hiep',
      designation: 'Technology Leader',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/26-1-2021-8-48-46-8.JPG'
    },
    {
      id: 3,
      title: 'MSc. Duc Nguyen Minh',
      designation: 'Team Leader',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/26-1-2021-8-49-6-33.JPG'
    },
    {
      id: 4,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    },
    {
      id: 5,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    },
    {
      id: 6,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    },
    {
      id: 7,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    },
    {
      id: 8,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    },
    {
      id: 9,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    },
    {
      id: 10,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    },
    {
      id: 11,
      title: 'BSc. Huan Chau Cong',
      designation: 'Developer',
      src: 'https://files01.duytan.edu.vn/svruploads/scs-duytan/upload/images/14-1-2021-8-21-12-33.JPG'
    }
  ]

  return (
    <div ref={containerRef} className='relative bg-transparent'>
      <AnimatedBackground />
      <div
        className='fixed inset-0'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      <div className='relative z-10 px-8 py-40'>
        <div className='px-8 pb-8'>
          <p className='mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black dark:text-white lg:text-5xl lg:leading-tight'>
            Đội ngũ nhân sự
          </p>

          <p className='mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 dark:text-neutral-300 lg:text-base'>
            Tiên phong trong công nghệ mô phỏng 3D, mang đến trải nghiệm độc đáo cho người dùng và thiết lập những quan
            hệ đối tác chiến lược bền vững
          </p>
        </div>
        <FocusCards cards={instructorsFocusCard} />
      </div>
    </div>
  )
}
