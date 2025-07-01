import { nanoid } from 'nanoid'
import { create } from 'zustand'
import type { StoreStateType } from '../types/StoreStateType'
import type { PositionType } from '../types/PositionType'
import type { StoreCubesType } from '../types/StoreCubesType'

export const useStore = create<StoreStateType>((set) => {
  const initialCubes : StoreCubesType[] = [
    {
      id:       nanoid(),
      pos:      [1, 1, 1] as PositionType,
      texture:  'dirt'
    },
    {
      id:       nanoid(),
      pos:      [1, 1, 1] as PositionType,
      texture:  'dirt'
    }
  ]

  return {
    texture:    'dirt',
    cubes:      initialCubes,
    addCube:    (x : number, y : number, z : number) => {
      set((state : StoreStateType) => ({
        cubes: [...state.cubes,
          {
            id: nanoid(),
            texture: state.texture,
            pos: [x, y, z] as PositionType
          }
        ]
      }))
    },
    removeCube: () => {},
    setTexture: () => {},
    saveWorld:  () => {},
    resetWorld: () => {},
  }
})