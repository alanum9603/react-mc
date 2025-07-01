import { useBox } from "@react-three/cannon"

type Cubes = {
  id: string, 
  position: [x: number, y: number, z: number], 
  texture: string
}

export const Cube = ({ id, position, texture } : Cubes) => {
  const [ref] = useBox(() => ({
    type: 'Static', 
    position
  }))
  return (
    <mesh ref={ref}>
      <boxGeometry attach={'geometry'} />
      <meshStandardMaterial 
        color={'white'} 
        attach={'material'} 
        // map={texture} 
      />
    </mesh>
  )
}