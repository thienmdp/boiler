import { Project, Contact, Features, Hero, TimeLine } from '@/components/core/landing'

export default function page() {
  return (
    <section className='relative flex w-full flex-col items-center justify-center px-4 md:px-0'>
      <Hero />
      <Features />
      <Project />
      <TimeLine />
      <Contact />
    </section>
  )
}
