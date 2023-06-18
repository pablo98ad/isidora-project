import { GA_TRACKING_ID, loadGA } from '@/utils/ga'
import { Html, Head, Main, NextScript } from 'next/document'
const { useEffect } = require('react')

export default function Document() {
  useEffect(() => {
    loadGA()
  }, [])

  console.log('ga', GA_TRACKING_ID)

  return (
    <Html lang='es'>
      <Head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}');
                `
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
