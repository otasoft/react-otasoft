import { ReactNode } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }): ReactNode {
  return <Component {...pageProps} />
}

export default MyApp
