import { useEffect, useState } from 'react'
import { useStore } from '../hooks/useStore'
import { useKeyboard } from '../hooks/useKeyboard'
import * as images from '../images/images'
import type { StoreTextureType } from '../types/StoreTextureType'

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false)
  const texture = useStore(state => state.texture)
  const setTexture = useStore(state => state.setTexture)

  const {
    grass,
    dirt,
    log,
    glass,
    wood
  } = useKeyboard()

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 2000)

    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [texture])

  useEffect(() => {
    const options = {
      grass,
      dirt,
      log,
      glass,
      wood
    } 

    const selectedTexture = Object.entries(options).find(([, isEnabled]) => isEnabled) 
    
    if (selectedTexture) {
      const [textureName] = selectedTexture 
      setTexture(textureName as StoreTextureType)
    }
  }, [grass, dirt, log, glass, wood])

  return !visible 
    ? null 
    : <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {
        Object
          .entries(images)
          .map(([imageKey, image]) => {
            return (
              <img
                className={texture === imageKey.replace('Img', '') ? 'selected' : ''}
                key={imageKey}
                src={image}
                alt={imageKey}
                onClick={() => setTexture(imageKey as StoreTextureType)}
              />
            )
          })
      }
    </div>
}