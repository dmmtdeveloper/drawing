import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#7C3AED" />
    </mesh>
  )
}

export default function Canvas3D() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden bg-slate-900/50 border border-slate-800">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
