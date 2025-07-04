import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const FPV = () => {
  const { camera, gl } = useThree()
  return (
    <PointerLockControls
      camera={camera}
      domElement={gl.domElement}
    />
  )
}

export default FPV