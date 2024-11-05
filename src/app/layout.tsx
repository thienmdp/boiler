import { PublicNavbar } from '@/components/global/public-navbar'
import { ThemeProvider } from '@/components/theme-provider'
import '@/css/globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter as FontSans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'CVS - R&D. The Company for Visualization & Simulation (CVS)',
  description:
    'The Company for Visualization & Simulation (CVS) for Research & Development of handcrafted 3D Simulations based on the newest technologies',
  icons: 'favicon.ico'
}

const TopProgressBar = dynamic(
  () => {
    return import('@/components/core/top-progress-bar')
  },
  { ssr: false }
)

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true} className='dark'>
      <body
        suppressHydrationWarning={true}
        className={cn('min-h-screen overflow-x-hidden font-sans antialiased', fontSans.variable)}
      >
        <TopProgressBar />
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <PublicNavbar />
          <Toaster
            toastOptions={{
              duration: 1000,
              style: {
                border: '1px solid #fff',
                padding: '16px',
                fontSize: '14px'
              },
              success: {},
              error: {}
            }}
            position='top-center'
            reverseOrder={false}
            gutter={8}
            containerClassName=''
            containerStyle={{}}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
