import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  id?: string
  className?: string
  children: React.ReactNode
}

const Wrapper = ({ id, children, className }: Props) => {
  return (
    <div className={cn('mx-auto h-full w-full max-w-screen-2xl px-4 md:px-20', className)} id={id}>
      {children}
    </div>
  )
}

export default Wrapper
