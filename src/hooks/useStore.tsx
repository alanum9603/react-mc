import { nanoid } from 'nanoid'
import { create } from 'zustand'

export const useStore = create(set => {
  const initialCubes = [
    {
      id:       nanoid(),
      pos:      [1, 1, 1],
      texture:  'dirt'
    },
    {
      id:       nanoid(),
      pos:      [1, 1, 1],
      texture:  'dirt'
    }
  ]

  return {
    texture:    'dirt',
    cubes:      initialCubes,
    addCube:    () => {},
    removeCube: () => {},
    setTexture: () => {},
    saveWorld:  () => {},
    resetWorld: () => {},
  }
})