import type { AddCubeFunctionType } from "./AddCubeFunctionType"
import type { RemoveCubeFunctionType } from "./RemoveCubeFunctionType"
import type { SetTextureFunctionType } from "./SetTextureFunctionType"
import type { StoreCubesType } from "./StoreCubesType"
import type { StoreTextureType } from "./StoreTextureType"

export type StoreStateType = {
  texture:    StoreTextureType,
  cubes:      StoreCubesType[],
  addCube:    AddCubeFunctionType,
  removeCube: RemoveCubeFunctionType,
  setTexture: SetTextureFunctionType,
  saveWorld:  () => void,
  resetWorld: () => void
}