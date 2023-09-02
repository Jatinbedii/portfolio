
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JatinBedi - Portfolio',
  description: 'Hey! i am JatinBedi. A full stack web developer.This is a portfolio site to showcase myskills',
  keywords : ['nextjs','portfolio', 'jatin bedi', 'Jatin bedi','Jatinbedi', 'jatin bedi portfolio', 'tailwind', 'css', 'emailjs']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
</head>
      <body className={inter.className} >
      
        {children}
        
        </body>
    </html>
  )
}
