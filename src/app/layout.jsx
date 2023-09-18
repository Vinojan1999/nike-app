import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Nike by Vinojan',
//   description: 'Nike delivers innovative products, experiences and services to inspire athletes.',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Nike delivers innovative products, experiences and services to inspire athletes."
          />
        <meta name='keywords' content='nike shoes premium'></meta>
        <link rel="apple-touch-icon" href="/logo.svg" />
        <title>Nike by Vinojan</title>

        <meta property="og:title" content="Nike. Just Do It"></meta>
        <meta property="og:description" content="Nike delivers innovative products, experiences and services to inspire athletes."></meta>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://vinojan.online/" />
        <meta property="og:image" content="https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg"></meta>
        <meta property="og:site_name" content="Nike by Vinojan"></meta>
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
