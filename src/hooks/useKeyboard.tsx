import { useEffect, useState } from "react"

type ActionKey = 
  | 'KeyW'
  | 'KeyS'
  | 'KeyA'
  | 'KeyD'
  | 'Space'
  | 'Digit1'
  | 'Digit2'
  | 'Digit3'
  | 'Digit4'
  | 'Digit5'

const ACTIONS_KEYBOARD_MAP = {
  KeyW:   'moveForward',
  KeyS:   'moveBackward',
  KeyA:   'moveLeft',
  KeyD:   'moveRight',
  Space:  'jump',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log'
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward:  false,
    moveBackward: false,
    moveLeft:     false,
    moveRight:    false,
    jump:         false,
    dirt:         false,
    grass:        false, 
    wood:         false,
    log:          false
  })

  useEffect(() => {
    const handleKeyDown = (event : KeyboardEvent) => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code as ActionKey] 
      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: true
        }))
      }
    }

    const handleKeyUp = (event : KeyboardEvent) => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code as ActionKey] 
      if (action) {
        setActions(prevActions => ({
          ...prevActions,
          [action]: false
        }))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actions
}