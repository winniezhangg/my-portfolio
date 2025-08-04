import './globals.css'
import { DM_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Winnie Zhang | Portfolio',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        <div className="bg-white text-gray-800 min-h-screen">{children}</div>
      </body>
    </html>
  )
}
