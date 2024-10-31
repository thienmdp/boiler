import Container from '@/components/global/container'
import { SkeletonFour, SkeletonOne, SkeletonThree, SkeletonTwo } from '@/components/ui/Skeleton'
import { cn } from '@/lib/utils'
import React from 'react'

export default function Features() {
  const features = [
    {
      title: 'Đổi mới công nghệ',
      description:
        'Nghiên cứu và phát triển các công nghệ mô phỏng 3D tiên tiến, đáp ứng nhu cầu ngày càng cao của thị trường và nâng cao hiệu quả trong các lĩnh vực ứng dụng',
      skeleton: <SkeletonOne />,
      className: 'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800'
    },
    {
      title: 'Tăng cường Trải nghiệm ',
      description:
        'Tạo ra các sản phẩm và giải pháp dễ sử dụng, thân thiện với người dùng, giúp tối ưu hóa trải nghiệm tương tác trong không gian 3D',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800'
    },
    {
      title: 'RESEARCH',
      description:
        'CVS actively researches solutions for modeling, reconstruction and re-creation of 3D objects, building 3d spaces, and simulations of interactive controls. Whether its you or Tyler Durden, you can get to know about our product on YouTube',
      skeleton: <SkeletonThree />,
      className: 'col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800'
    },
    {
      title: 'Hợp tác và Đối tác Chiến lược',
      description:
        'CVS tập trung nghiên cứu và triển khai các phát triển và giải pháp mới nhất về hình ảnh 3D, thực tế ảo, thực tế tăng cường, trí tuệ nhân tạo và Internet vạn vật, nhằm đáp ứng nhu cầu O.B.O.R cho Việt Nam và toàn cầu.',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none'
    }
  ]
  return (
    <div className='relative z-20 mx-auto max-w-7xl py-10 lg:py-40'>
      <div className='px-8'>
        <h4 className='mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black dark:text-white lg:text-5xl lg:leading-tight'>
          Mục tiêu
        </h4>

        <p className='mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 dark:text-neutral-300 lg:text-base'>
          Tiên phong trong công nghệ mô phỏng 3D, mang đến trải nghiệm độc đáo cho người dùng và thiết lập những quan hệ
          đối tác chiến lược bền vững
        </p>
      </div>

      <div className='relative'>
        <div className='mt-12 grid grid-cols-1 rounded-md dark:border-neutral-800 lg:grid-cols-6 xl:border'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>{children}</div>
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className='mx-auto max-w-5xl text-left text-xl tracking-tight text-black dark:text-white md:text-2xl md:leading-snug'>
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'mx-auto max-w-4xl text-left text-sm md:text-base',
        'text-center font-normal text-neutral-500 dark:text-neutral-300',
        'mx-0 my-2 max-w-sm text-left md:text-sm'
      )}
    >
      {children}
    </p>
  )
}
