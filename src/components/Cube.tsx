import { useBox } from "@react-three/cannon"
import * as texturesObj from "../images/textures"
import type { CubesType } from "../types/CubesType"
import type { Texture } from "three"
import type { TexturesType } from "../types/TexturesType"

const textures : TexturesType = texturesObj

export const Cube = ({ id, position, texture } : CubesType) => {
  const [ref] = useBox(() => ({
    type: 'Static', 
    position
  }))

  const activeTexture : Texture = textures[`${texture}Texture`]

  return (
    <mesh ref={ref}>
      <boxGeometry attach={'geometry'} />
      <meshStandardMaterial 
        attach={'material'} 
        map={activeTexture} 
      />
    </mesh>
  )
}