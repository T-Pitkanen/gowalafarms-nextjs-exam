
import './globals.css'
import { robotoFont, frankRuhlLibreFont } from '@/utils/fonts';
import { BasketContextProvider } from '@/context/basket';


export const metadata = {
  title: 'Gowala Farms',
  description: 'Homepage for gowalafarms.dk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable} ${frankRuhlLibreFont.className}`}>
      <BasketContextProvider>{children}</BasketContextProvider>
      </body>
    </html>
  )
}
