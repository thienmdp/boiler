'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/global/mode-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import path from '@/constants/path'
import { MenuIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu'
import { Icons } from '../ui/icons'

type navItemsType = {
  name: string
  link: string
  icon?: JSX.Element
}[]

const navItems: navItemsType = [
  {
    name: 'Trang chủ',
    link: path.landing
  },
  {
    name: 'Giới thiệu',
    link: '#about'
  },
  {
    name: 'Tin tức & Sự kiện',
    link: '#time-line'
  }
  // {
  //   name: 'Liên hệ',
  //   link: '#contact'
  // }
]

export const PublicNavbar = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [popupOpen, setPopupOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!
      console.log('scrollYProgress', scrollYProgress.get())
      if (scrollYProgress.get() < 0.02) {
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
          `${visible ? 'max-w-full !border-none !bg-transparent !shadow-none' : 'max-w-fit rounded-full'} fixed inset-x-0 top-0 z-[5000] mx-auto flex items-center justify-center space-x-4 border border-white/[0.2] bg-gray-100/80 px-4 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-black-100/80 sm:px-10`,
          className
        )}
      >
        <div className='hidden items-center sm:flex'>
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(buttonVariants({ variant: 'linkHover2' })) + ' !bg-transparent'}>
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[500px] gap-3 bg-white p-6 dark:bg-black-100 md:w-[550px] lg:w-[750px] lg:grid-cols-[.75fr_1fr]'>
                    <li className='row-span-3'>
                      <NavigationMenuLink asChild>
                        <Link
                          className='flex h-full w-full select-none flex-col items-center justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                          href={path.landing}
                        >
                          <Image src={'/assets/icon.png'} width={100} height={100} alt='CVS' />
                          <div className='mb-2 mt-4 text-lg font-medium'>
                            The Center for Visualization & Simulation (CVS)
                          </div>
                          <p className='text-sm leading-tight text-muted-foreground'>
                            Chúng tôi là đơn vị tiên phong trong nghiên cứu và phát triển công nghệ mô phỏng 3D, ứng
                            dụng những công nghệ tiên tiến nhất để tạo ra những trải nghiệm sống động và chân thực.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href='#linhvuc' title='Lĩnh vực nghiên cứu'>
                      Hướng đến việc ứng dụng công nghệ tiên tiến để số hóa dữ liệu, mô phỏng thực tế, và phát triển các
                      giải pháp đáp ứng nhu cầu xã hội một cách hiệu quả và sáng tạo
                    </ListItem>
                    <ListItem href='#muctieu' title='Mục tiêu & Chiến lược'>
                      Tiên phong trong công nghệ mô phỏng 3D, mang đến trải nghiệm độc đáo cho người dùng và thiết lập
                      những quan hệ đối tác chiến lược bền vững
                    </ListItem>
                    <ListItem href='#teammember' title='Đội ngũ nhân sự'>
                      Chúng tôi có hơn 20 nhân sự cho 4 nhóm R&D
                      <p>*Nhóm R&D Phần mềm *Nhóm R&D AI </p> <p>*Nhóm R&D IoT *Nhóm Thiết kế 2D/3D</p>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href={'#contact'} className={cn(buttonVariants({ variant: 'linkHover2' }))}>
            <span className='!cursor-pointer text-sm font-semibold'>Liên hệ</span>
          </Link>
          <ModeToggle />
        </div>
        <div className='flex !w-[85vw] items-center justify-between px-4 sm:hidden'>
          <Link href={path.landing} className={''}>
            <Image src={'/assets/logo.png'} width={48} height={30} alt='logo' aria-label='Trang chủ' />
          </Link>
          <Popover onOpenChange={setPopupOpen} open={popupOpen}>
            <PopoverTrigger asChild>
              <Button variant='ghost' size='icon' className='relative rounded-full' aria-label='btn-menu'>
                <MenuIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='z-[99999] grid w-fit bg-black-100'>
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={pathname !== path.landing ? path.landing : navItem.link}
                  className={cn(buttonVariants({ variant: 'linkHover2' }))}
                  onClick={() => setPopupOpen(false)}
                >
                  <span className='!cursor-pointer text-sm font-semibold'>{navItem.name}</span>
                </Link>
              ))}
              <Link href={'#linhvuc'} className={cn(buttonVariants({ variant: 'linkHover2' }))}>
                <span className='!cursor-pointer text-sm font-semibold'>Lĩnh vực nghiên cứu</span>
              </Link>
              <Link href={'#muctieu'} className={cn(buttonVariants({ variant: 'linkHover2' }))}>
                <span className='!cursor-pointer text-sm font-semibold'>Mục tiêu & Chiến lược</span>
              </Link>
              <Link href={'#teammember'} className={cn(buttonVariants({ variant: 'linkHover2' }))}>
                <span className='!cursor-pointer text-sm font-semibold'>Đội ngũ nhân sự</span>
              </Link>
              <Link href={'#contact'} className={cn(buttonVariants({ variant: 'linkHover2' }))}>
                <span className='!cursor-pointer text-sm font-semibold'>Liên hệ</span>
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-3 text-sm leading-snug text-muted-foreground'>{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
