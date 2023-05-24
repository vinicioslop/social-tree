import './globals.css'
import { Kanit } from 'next/font/google'

const kanit = Kanit(
  {
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
  })

export const metadata = {
  title: 'Social Tree',
  description: 'Principais maneiras de entrar em contato comigo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
