import { RecordIcon, StopIcon } from './Icons'
const { useState, useEffect } = require('react')

const getExtensionByMimeType = (mimeType) => {
  if (mimeType.includes('audio/wav')) {
    return '.waw'
  } else if (mimeType.includes('audio/mpeg')) {
    return '.mp3'
  } else if (mimeType.includes('audio/webm')) {
    return '.webm'
  }
  return '.audio'
}

function formatBytesToKilobytes (bytes, label = 'KB') {
  const kilobytes = bytes / 1024
  return kilobytes.toFixed(2) + ' ' + label
}

const Recording = () => {
  const [recording, setRecording] = useState(false)
  const [canRecording, setCanRecording] = useState(true)
  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [stream, setStream] = useState(null)
  const [audioChunks, setAudioChunks] = useState([])

  const getAudioRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        setStream(stream)
        const recorder = new MediaRecorder(stream)
        setMediaRecorder(recorder)
        return recorder
      } catch (error) {
        console.error('Error al acceder al micrófono:', error)
        return false
      }
    } else {
      console.error('El navegador no admite la API de MediaRecorder')
      return false
    }
  }

  const onRecording = async () => {
    if (recording) {
      mediaRecorder.stop()
      stream.getTracks().forEach(track => {
        track.stop()
        track.enabled = false
      })
    } else {
      const recorder = await getAudioRecording()
      setAudioChunks([])

      if (recorder) {
        recorder.start()
      } else {
        setCanRecording(false)
      }
    }
    setRecording(!recording)
  }

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks(prevChunks => [...prevChunks, event.data])
    }
  }
  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.addEventListener('dataavailable', handleDataAvailable)
    }
    return () => {
      if (mediaRecorder) {
        mediaRecorder.removeEventListener('dataavailable', handleDataAvailable)
      }
    }
  }, [mediaRecorder])

  const downloadRecording = () => {
    if (audioChunks.length === 0) {
      console.error('No se grabó ningún audio')
      return
    }
    const blob = new Blob(audioChunks, { type: mediaRecorder.mimeType })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `grabacion-broma-isidora${getExtensionByMimeType(mediaRecorder.mimeType)}`
    link.click()
  }

  return (
    <div
      className={`${canRecording ? '' : 'hidden'} fixed ${audioChunks.length ? 'bottom-12' : 'bottom-7'} right-7 z-50 animate-delay-500 animate-fadeIn text-white h-14 p-2 flex flex-col rounded-3xl border border-white  bg-gradient-to-b from-purple-300 via-purple-400 to-purple-800 `}
    >
      <div className={`flex flex-row items-center p-0 cursor-pointer  ${recording ? 'mt-1' : '-mt-2'} pr-2`} onClick={onRecording}>
        <div
          className={`${recording ? 'w-10 pr-2' : 'w-14 pl-0'} `}
        >
          {recording ? <StopIcon /> : <RecordIcon />}
        </div>
        <div>
          {recording ? 'Detener grabación' : '¡Graba la broma!'}
        </div>
      </div>
      {!!audioChunks.length &&
        <div className='mt-2'>
          {audioChunks.map((aud, index) =>
            <div key={index} className='hover:underline cursor-pointer' onClick={downloadRecording}>Descargar ({formatBytesToKilobytes(aud.size)})</div>
          )}
        </div>}
    </div>
  )
}

export default Recording
