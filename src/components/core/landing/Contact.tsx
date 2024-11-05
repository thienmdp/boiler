'use client'
import Container from '@/components/global/container'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { WavyBackground } from '@/components/ui/wavy-background'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { MAIL_SERVICE_ID, MAIL_SERVICE_PUBLIC_KEY, TEMPLATEID } from '@/constants/url'
import toast from 'react-hot-toast'

// const instructorsAnimatedTooltip = [
//   {
//     id: 1,
//     name: 'MSc. Chung Le Van',
//     designation: 'Director',
//     image: 'http://cvs.duytan.edu.vn/wp-content/uploads/2018/04/levanchung-380x380.jpg'
//   },
//   {
//     id: 2,
//     name: 'MSc. Hoa Trinh Hiep',
//     designation: 'Technology Leader',
//     image: 'http://cvs.duytan.edu.vn/wp-content/uploads/2018/04/trinhhiephoa-380x380.jpg'
//   },
//   {
//     id: 3,
//     name: 'MSc. Duc Nguyen Minh',
//     designation: 'Team Leader',
//     image: 'http://cvs.duytan.edu.vn/wp-content/uploads/2018/04/NguyenMinhDuc-380x380.png'
//   },
//   {
//     id: 4,
//     name: 'BSc. Huan Chau Cong',
//     designation: 'Developer',
//     image:
//       'http://cvs.duytan.edu.vn/wp-content/uploads/2019/07/26166539_824498371055228_1680186721811178213_n-380x353.jpg'
//   }
// ]
const contactSchema = z.object({
  user_name: z.string().nonempty('Họ và tên là bắt buộc'),
  user_mail: z.string().nonempty('Địa chỉ email là bắt buộc').email('Email không hợp lệ'),
  message: z.string().nonempty('Nội dung là bắt buộc')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const { theme } = useTheme()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })
  const TemplateID = TEMPLATEID || ''
  const ServiceID = MAIL_SERVICE_ID || ''
  const PublicKey = MAIL_SERVICE_PUBLIC_KEY

  const onSubmit = (data: ContactFormData) => {
    setLoading(true)
    emailjs
      .send(ServiceID, TemplateID, data, PublicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        toast.success('Message sent successfully!', { duration: 8000, position: 'top-right' })
        reset()
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err)
        toast.error('Failed to send message. Please try again.', { position: 'top-right' })
      })
      .finally(() => setLoading(false))
  }

  return (
    <section id='contact' className='w-full'>
      <Container className='relative flex h-[40rem] w-full items-center justify-center overflow-hidden'>
        <WavyBackground
          backgroundFill={theme === 'light' ? '#fff' : '#000414'}
          className='mx-auto flex h-full w-full flex-col items-center justify-center px-8'
        >
          <p className='mb-8 text-center text-2xl font-bold md:text-4xl lg:text-7xl'>Liên hệ</p>
          <p className='mb-10 text-center text-base md:text-lg'>
            Gặp gỡ các chuyên gia tài năng, những người sẽ đồng hành cùng dự án của bạn
          </p>
          <div className='relative mb-10 w-full'>
            <div className='gradient absolute inset-0 left-1/2 top-1/2 -z-10 h-1/4 w-3/4 -translate-x-1/2 -translate-y-1/2 blur-[12rem]'></div>
            <div className='z-[9999] -m-2 rounded-xl bg-opacity-50 p-2 ring-1 ring-inset ring-foreground/20 backdrop-blur-2xl lg:-m-4 lg:rounded-2xl'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid w-full items-center gap-2 px-4 py-4 md:px-8 md:py-8'
              >
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <Label htmlFor='user_name'>Họ và tên</Label>
                    <Input
                      id='user_name'
                      {...register('user_name')}
                      placeholder='Enter your name'
                      className='w-full duration-300 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent'
                    />
                    <p className='text-sm text-red-500'>{errors.user_name && errors.user_name.message}</p>
                  </div>
                  <div>
                    <Label htmlFor='user_mail'>Địa chỉ Email</Label>
                    <Input
                      id='user_mail'
                      {...register('user_mail')}
                      type='email'
                      placeholder='Enter your email'
                      className='w-full duration-300 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent'
                    />
                    <p className='text-sm text-red-500'>{errors.user_mail && errors.user_mail.message}</p>
                  </div>
                </div>
                <div>
                  <Label htmlFor='message'>Nhập nội dung</Label>
                  <Textarea
                    id='message'
                    {...register('message')}
                    placeholder='Type your message here.'
                    className='min-h-32 w-full duration-300 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent'
                  />
                  <p className='text-sm text-red-500'>{errors.message && errors.message.message}</p>
                </div>

                <Button type='submit' size='sm' variant='ringHover' className='w-full' isLoading={loading}>
                  Send Message
                </Button>
              </form>
              {/* <BorderBeam size={250} duration={12} delay={9} /> */}
            </div>
          </div>
        </WavyBackground>
      </Container>
    </section>
  )
}
