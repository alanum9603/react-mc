import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"
import { useStore } from "../hooks/useStore"
import type { ThreeEvent } from "@react-three/fiber"
import type { PositionType } from "../types/PositionType"
import type { AddCubeFunctionType } from "../types/AddCubeFunctionType"

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // x, y, z
    position: [0, -0.5, 0] // x, y, z
  }))

  const addCube : AddCubeFunctionType = useStore(state => state.addCube)

  groundTexture.repeat.set(100, 100)

  const handleClickGround = (event : ThreeEvent<PointerEvent>) => {
    event.stopPropagation()
    const [x, y, z] = Object.values(event.point).map(n => Math.ceil(n)) as PositionType 
    addCube(x, y, z)
  }

  return (
    <mesh 
      onClick={handleClickGround}
      ref={ref}
    >
      <planeGeometry attach={'geometry'} args={[100, 100]} />
      <meshStandardMaterial attach={'material'} map={groundTexture} />
    </mesh>
  )
}

export default Ground