import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Ground from './components/Ground'
import FPV from './components/FPV'
import Player from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]}/>
        <ambientLight intensity={1} />
        <FPV />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
      <TextureSelector />
    </>
  )
}
export default App
