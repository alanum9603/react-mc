import type { StoreCubesType } from "./StoreCubesType"
import type { StoreTextureType } from "./StoreTextureType"

export type StoreStateType = {
  texture: StoreTextureType,
  cubes: StoreCubesType[],
  addCube: (x: number, y: number, z:number) => void,
  removeCube: () => void,
  setTexture: () => void,
  saveWorld:  () => void,
  resetWorld: () => void
}