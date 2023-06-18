import '@/styles/globals.css'
import { Toaster } from 'sonner'
import CookieConsent from 'react-cookie-consent'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster position='bottom-right' />
      <CookieConsent
        location='bottom'
        buttonText='Ok'
        cookieName='cookies_consent'
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.
      </CookieConsent>
      <Component {...pageProps} />
    </>
  )
}
