import { ClipboardCopy, FileLock, Signature, TableColumnsSplit } from 'lucide-react'

const Skeleton = () => (
  <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,black,blue)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2] dark:[mask-image:radial-gradient(ellipse_at_center,white,transparent)]'>
    {/* <Image src={''} height={800} width={800} alt='' /> */}
  </div>
)
export const gridItems = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <ClipboardCopy className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <FileLock className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <Signature className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <TableColumnsSplit className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <TableColumnsSplit className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <TableColumnsSplit className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <TableColumnsSplit className='h-4 w-4 text-neutral-500' />
  }
]
