import { PATHS } from '@/config/consts'
import { PauseIcon, PlayIcon } from './Icons'
const { useState, useEffect } = require('react')

const buildAudioPath = (path) => `/${PATHS.AUDIOS_PATH}${path}`

export function AudioJoke({ audio }) {
  const [audioState, setAudioState] = useState(null)
  const [playing, setPlaying] = useState(false)

  const playAudio = () => {
    if (playing) {
      audioState.pause()
      audioState.currentTime = 0
      setPlaying(false)
    } else {
      audioState.play()
      setPlaying(true)
    }
  }

  useEffect(() => {
    const audioReference = new Audio(buildAudioPath(audio.file))
    audioReference.addEventListener('ended', () => setPlaying(false))
    setAudioState(audioReference)
    return () => {
      audioReference.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return (
    <div className={` border border-white rounded-2xl px-2 flex items-center font-semibold transition-all transition-slowest ease cursor-pointer text-xl sm:text-3xl ${playing ? 'bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800 font-bold' : ' text-white '}`} onClick={playAudio}>
      <div>{audio.label}</div>
      <div className='w-8 sm:w-12 hhover:w-16 transition-width transition-slowest ease'>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </div>
    </div>
  )
}
