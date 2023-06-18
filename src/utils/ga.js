export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
export const GA_ADSENSE_CLIENT = process.env.ADSENSE_CLIENT
export const GA_ADSENSE_SLOT = process.env.ADSENSE_SLOT

// Función para cargar el script de Google Analytics
export const loadGA = () => {
  if (process.env.NODE_ENV === 'production') {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', GA_TRACKING_ID)
  }
}
