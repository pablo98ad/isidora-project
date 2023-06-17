import Head from 'next/head'
import { useAppStore } from '@/stores/app'

export default function Home() {
  const appName = useAppStore((state) => state.appName)

  return (
    <>
      <Head>
        <title>bromaisidora.com</title>
        <meta
          name='description'
          content='Broma Isidora Anda Ya, crea tu propia broma'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative'>
        <div className='relative z-10 flex flex-col justify-top max-w-5xl min-h-screen px-4 mx-auto h-screen-ios sm:px-8 md:max-w-4xl'>
          <main className='w-full mx-auto'>
            <h1 className='mt-2 bg-gradient-to-br from-white to-slate-10 bg-clip-text text-transparent text-[35px] leading-[42px] sm:text-6xl tracking-[-0.64px] sm:leading-[68px] sm:tracking-[-0.896px] font-bold mb-12 animate-delay-200 animate-duration-1000 animate-fadeIn text-center'>
              <span className='inline-block max-w-[700px] align-top'>
                Broma telefónica{' '}
                <span className='bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800'>
                  ¿ISIDORA?
                </span>
                {/* <br />
                con{' '}
                <span className='relative bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800'>
                  <Blob className='absolute right-0 bg-purple-500 -top-[200%]' />
                  Inteligencia Artificial
                </span> */}
              </span>
            </h1>

            <footer
              className={`fixed bottom-0 left-0 right-0 block pb-5 mt-5 text-center animate-delay-1000 opacity-60 text-white/80 ${
                appName ? 'animate-fadeOut' : 'animate-delay-500 animate-fadeIn'
              }`}
            >
              Proyecto realizado por{' '}
              <a
                className='text-white hover:underline'
                href='https://twitter.com/pablo98ad'
              >
                @pablo98ad
              </a>{' '}
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
