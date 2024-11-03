export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='overflow-hidden dark:bg-black-100 sm:overflow-clip'>{children}</div>
}
