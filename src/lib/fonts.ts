import localFont from "next/font/local"

export const fontSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-sans",
})

export const fontMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-mono",
})
