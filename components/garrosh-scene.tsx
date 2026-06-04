'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'

// Set Draco decoder path so compressed GLB files load correctly
useGLTF.setDecoderPath('/draco/')
import type { Group } from 'three'

function GarroshModel({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const { scene } = useGLTF('/models/garrosh2.glb')
  const ref = useRef<Group>(null!)
  const clock = useRef(0)

  // Smooth targets for mouse parallax
  const targetRotX = useRef(0)
  const targetRotY = useRef(0)

  // Base facing angle — tweak this to rotate starting orientation
  const BASE_Y = -1.8  // angled toward text

  useFrame((_, delta) => {
    if (!ref.current) return
    clock.current += delta

    // Float: gentle sine bob on Y position
    ref.current.position.y = -2.4 + Math.sin(clock.current * 0.7) * 0.08

    // Mouse parallax targets — subtle
    targetRotX.current = mouseY * 0.04
    targetRotY.current = BASE_Y + mouseX * 0.06

    // Smooth lerp toward target
    ref.current.rotation.x += (targetRotX.current - ref.current.rotation.x) * 0.04
    ref.current.rotation.y += (targetRotY.current - ref.current.rotation.y) * 0.04
  })

  return (
    <group ref={ref} position={[0, -2.4, 0]} scale={1.5}>
      <primitive object={scene} />
    </group>
  )
}

export function GarroshScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      // Normalize to -1 → +1 from center of screen
      setMouse({
        x: (e.clientX / w - 0.5) * 2,
        y: -(e.clientY / h - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 34 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.4}
            color="#e8d5c0"
          />
          <pointLight position={[-4, 2, -2]} intensity={0.8} color="#e84a2a" />
          <pointLight position={[4, 0, 3]} intensity={0.4} color="#2e8fdf" />
          <GarroshModel mouseX={mouse.x} mouseY={mouse.y} />
          <ContactShadows
            position={[0, -2.4, 0]}
            opacity={0.35}
            scale={6}
            blur={2.5}
            far={4}
            color="#000"
          />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}
