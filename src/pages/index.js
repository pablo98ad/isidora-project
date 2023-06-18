import Head from 'next/head'
import { useAppStore } from '@/stores/app'
import { AudioJoke } from '@/components/AudioJoke'
import { AUDIOS_JOKE } from '@/constants/audios-joke'
import Recording from '@/components/Recording'
import Ad from '@/components/Ad'
import { GA_ADSENSE_SLOT } from '@/utils/ga'

export default function Home() {
  const appName = useAppStore((state) => state.appName)

  return (
    <>
      <Head>
        <title>Broma Isidora Anda Ya</title>
        <meta name='description' content='Crea tu propia broma telefónica con Isidora Anda Ya' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='keywords' content='Isidora Anda Ya, isidora, broma isidora, broma anda ya, broma telefonica, telefonica, humor, broma online' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://bromaisidora.vercel.app/' />
      </Head>

      <div className='relative'>
        <div className='relative z-10 flex flex-col justify-top max-w-full xl min-h-screen px-4 mx-auto h-screen-ios sm:px-8 md:max-w-7xl h-full'>
          <main className='w-full mx-auto h-full'>
            <h1 className='mt-2 bg-gradient-to-br from-white to-slate-10 bg-clip-text text-transparent text-[35px] leading-[42px] sm:text-6xl tracking-[-0.64px] sm:leading-[68px] sm:tracking-[-0.896px] font-bold mb-12 animate-delay-200 animate-duration-1000 animate-fadeIn text-center'>
              <span className='inline-block max-w-[700px] align-top'>
                Broma telefónica{' '}
                <span className='bg-clip-text bg-gradient-to-b from-purple-300 via-purple-400 to-purple-700'>
                  ¿ISIDORA?
                </span>
              </span>
            </h1>

            <Ad adSlot={GA_ADSENSE_SLOT} />

            <div className='flex items-start gap-4 flex-wrap mb-10 animate-delay-500 animate-fadeIn'>
              {AUDIOS_JOKE.map((audio) => <AudioJoke key={audio.file} audio={audio} />)}
            </div>

            <Recording />

            <footer
              className={`block pb-5 mt-5 text-center animate-delay-1000 opacity-60 text-white/80 
              ${appName ? 'animate-fadeOut' : 'animate-delay-500 animate-fadeIn'}`}
            >
              Proyecto realizado por{' '}
              <a className='text-white hover:underline' target='_blank' href='https://github.com/pablo98ad'>@pablo98ad</a>
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
