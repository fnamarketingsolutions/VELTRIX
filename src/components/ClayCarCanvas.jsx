import { Suspense, useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import carModelUrl from '../assets/models/sports-car.glb?url'

const CLAY = '#c4c4c4'

function ClayCarModel() {
  const { scene } = useGLTF(carModelUrl)

  const clayScene = useMemo(() => {
    const clone = scene.clone(true)
    const clayMat = new THREE.MeshStandardMaterial({
      color: CLAY,
      roughness: 0.92,
      metalness: 0.02,
    })

    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (Array.isArray(child.material)) {
          child.material = child.material.map(() => clayMat.clone())
        } else {
          child.material = clayMat
        }
      }
    })

    return clone
  }, [scene])

  return (
    <Center top>
      <primitive object={clayScene} scale={0.8} />
    </Center>
  )
}

useGLTF.preload(carModelUrl)

/**
 * Interactive clay sports car — drag with mouse or finger to orbit.
 */
export default function ClayCarCanvas({ className = '' }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <div
      className={`h-full w-full ${className}`}
      style={{ touchAction: 'none' }}
    >
      <Canvas
        camera={{ position: [2.8, 1.1, 3.6], fov: 32, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.75]}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[3.5, 5, 2]}
          intensity={1.35}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.35} />
        <hemisphereLight args={['#e8e8e8', '#1a1a1a', 0.45]} />

        <Suspense fallback={null}>
          <ClayCarModel />
          <ContactShadows
            position={[0, 0, 0]}
            opacity={0.45}
            scale={7}
            blur={2.4}
            far={4}
            color="#000000"
          />
        </Suspense>

        {!reducedMotion && (
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            enableRotate
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.85}
            minPolarAngle={Math.PI * 0.28}
            maxPolarAngle={Math.PI * 0.55}
            target={[0, 0.15, 0]}
          />
        )}
      </Canvas> 
    </div>
  )
}