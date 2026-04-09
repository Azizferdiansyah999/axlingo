import './globals.css'

export const metadata = {
  title: 'axlingo - Master the Slang',
  description: 'Cyberpunk language learning platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Outfit:wght@500;800&family=Space+Grotesk:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary/30 overflow-x-hidden font-body">
        <main>{children}</main>
      </body>
    </html>
  )
}