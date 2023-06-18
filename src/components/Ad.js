import React from 'react'
import AdSense from 'react-adsense'
import { GA_ADSENSE_CLIENT } from '@/utils/ga'

const Ad = ({ adSlot }) => {
  console.log('GA_ADSENSE_CLIENT', GA_ADSENSE_CLIENT, 'addslot', adSlot)

  return (
    <div>
      <AdSense.Google
        client={GA_ADSENSE_CLIENT}
        slot={adSlot}
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
      />
    </div>
  )
}

export default Ad
