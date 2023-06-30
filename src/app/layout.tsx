import './globals.css'
import Provider from './Provider'

export const metadata = {
  title: 'Netflix Clone',
  description: 'Full Stack Netflix Clone in React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth & Vercel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
