import { useBox } from "@react-three/cannon"
import * as texturesObj from "../images/textures"
import type { CubesType } from "../types/CubesType"
import type { Texture } from "three"
import type { TexturesType } from "../types/TexturesType"
import { useState } from "react"
import { useStore } from "../hooks/useStore"
import type { RemoveCubeFunctionType } from "../types/RemoveCubeFunctionType"

const textures : TexturesType = texturesObj

export const Cube = ({ id, position, texture } : CubesType) => {
  const [IsHovered, setIsHovered] = useState(false)
  
  const removeCube : RemoveCubeFunctionType = useStore(state => state.removeCube)

  const [ref] = useBox(() => ({
    type: 'Static', 
    position
  }))

  const activeTexture : Texture = textures[`${texture}Texture`]

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }} 
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }} 
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        if (e.altKey) {
          removeCube(id)
        }

      }}
    >
      <boxGeometry attach={'geometry'} />
      <meshStandardMaterial 
        color={IsHovered ? 'grey' : 'white'}
        transparent
        attach={'material'} 
        map={activeTexture} 
      />
    </mesh>
  )
}