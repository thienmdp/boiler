import Container from '@/components/global/container'
import Wrapper from '@/components/global/wrapper'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { gridItems } from '@/data/dummy'

export default function Project() {
  return (
    <section id='gioi-thieu'>
      <Wrapper className='relative flex flex-col items-center justify-center py-12'>
        <div className='absolute -right-1/3 top-0 -z-10 hidden h-72 w-72 rounded-full bg-primary blur-[10rem] md:block'></div>
        <div className='--z-10 absolute -left-1/3 bottom-0 z-10 hidden h-72 w-72 rounded-full bg-indigo-600 blur-[10rem] md:block'></div>
        <div className='mx-auto mb-6 max-w-md text-start md:text-center'>
          <p className='mt-6 text-3xl font-semibold lg:text-4xl'>Project</p>
          <p className='my-6 text-muted-foreground'>Các dự án của chúng tôi</p>
        </div>
        <Container>
          <BentoGrid className='container mx-auto md:auto-rows-[20rem]'>
            {gridItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </Container>
      </Wrapper>
    </section>
  )
}
