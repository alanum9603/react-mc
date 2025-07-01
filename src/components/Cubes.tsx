import { useStore } from "../hooks/useStore";
import type { StoreCubesType } from "../types/StoreCubesType";
import { Cube } from "./Cube";

export const Cubes = () => {
  const cubes : StoreCubesType[] = useStore(state => state.cubes)

  return cubes.map(({id, pos, texture} : StoreCubesType) => {
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