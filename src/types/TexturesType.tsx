import type { Texture } from "three"
import type { StoreTextureType } from "./StoreTextureType"

export type TexturesType = { 
  [key in `${StoreTextureType}Texture`] : Texture
}