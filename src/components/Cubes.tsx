import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

type CubesType = {
  id: string, 
  pos: [x: number, y: number, z: number], 
  texture: string
}

export const Cubes = () => {
  const cubes = useStore(state => state.cubes)

  console.log('CUBES REFERENCE', cubes)
  return cubes.map(({id, pos, texture} : CubesType) => {
    return (
      <Cube
        key={id}
        id={id}
        position={pos}
        texture={texture}
      />
    )
  })
}