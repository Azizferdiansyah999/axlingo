import './globals.css'

export const metadata = {
  title: 'axlingo - Master the Slang',
  description: 'Cyberpunk language learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}