'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import type { Group } from 'three'

// Per-model tuning — add an entry here whenever a new boss model is added
const MODEL_CONFIG: Record<string, {
  baseY: number    // starting Y rotation (face direction)
  scale: number    // model size
  posY: number     // vertical offset (negative = lower)
  camZ: number     // camera distance
  camY: number     // camera height
  fov: number      // field of view (lower = tighter/zoomed)
}> = {
  'garrosh2.glb': {
    baseY: -1.8, scale: 1.5, posY: -2.4, camZ: 5, camY: 1.5, fov: 34,
  },
  'waterelementalbosscorrupted.glb': {
    baseY: -1.8, scale: 1.35, posY: -2.4, camZ: 5, camY: 1.5, fov: 34,
  },
  'shaboss.glb': {
    baseY: -1.8, scale: 0.25, posY: -3.4, camZ: 5, camY: 1.5, fov: 40,
  },
  'shaboss_pride.glb': {
    baseY: -1.8, scale: 0.4, posY: -4.4, camZ: 5, camY: 1.5, fov: 100,
  },
  'korkronprotodrake_protodragon_northrendred.glb': {
    baseY: -2.0, scale: 0.5, posY: -3.0, camZ: 8, camY: 1.5, fov: 60,
  },
  'ironjuggernaut_dungeondoll.glb': {
    baseY: -1.8, scale: 1.35, posY: -1.4, camZ: 5, camY: 1.5, fov: 34,
  },
  'orcsupersoldier.glb': {
    baseY: -1.8, scale: 1.35, posY: -2.4, camZ: 8, camY: 1.5, fov: 34,
  },
  'hordearmoredtrex_01dark.glb': {
    baseY: -2.0, scale: 0.6, posY: -3.0, camZ: 8, camY: 1.5, fov: 34,
  },
  'siegeengineer_doll_blackfuseskin.glb': {
    baseY: -1.8, scale: 0.9, posY: -2.4, camZ: 8, camY: 1.5, fov: 40,
  },
}

const DEFAULT_CONFIG = {
  baseY: -1.8, scale: 1.35, posY: -2.4, camZ: 5, camY: 1.5, fov: 34,
}

function BossModel({
  modelFile,
  mouseX,
  mouseY,
  config,
}: {
  modelFile: string
  mouseX: number
  mouseY: number
  config: typeof DEFAULT_CONFIG
}) {
  const { scene } = useGLTF(`/models/${modelFile}`)
  const ref = useRef<Group>(null!)
  const clock = useRef(0)
  const targetRotX = useRef(0)
  const targetRotY = useRef(config.baseY)

  useFrame((_, delta) => {
    if (!ref.current) return
    clock.current += delta

    // Float
    ref.current.position.y = config.posY + Math.sin(clock.current * 0.7) * 0.08

    // Mouse parallax — subtle
    targetRotX.current = mouseY * 0.04
    targetRotY.current = config.baseY + mouseX * 0.06

    // Smooth lerp
    ref.current.rotation.x += (targetRotX.current - ref.current.rotation.x) * 0.04
    ref.current.rotation.y += (targetRotY.current - ref.current.rotation.y) * 0.04
  })

  return (
    <group ref={ref} position={[0.6, config.posY, 0]} scale={config.scale}>
      <primitive object={scene} />
    </group>
  )
}

export function BossModelScene({ modelFile }: { modelFile: string }) {
  const config = MODEL_CONFIG[modelFile] ?? DEFAULT_CONFIG
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, config.camY, config.camZ], fov: config.fov }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 8, 5]} intensity={1.4} color="#e8d5c0" castShadow />
          <pointLight position={[-4, 2, -2]} intensity={0.8} color="#e84a2a" />
          <pointLight position={[4, 0, 3]} intensity={0.4} color="#2e8fdf" />
          <BossModel modelFile={modelFile} mouseX={mouse.x} mouseY={mouse.y} config={config} />
          <ContactShadows position={[0, config.posY, 0]} opacity={0.35} scale={6} blur={2.5} far={4} color="#000" />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}
