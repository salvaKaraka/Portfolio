"use client"
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function F1Car3DModel(props) {
  const group = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if(group.current) {
        group.current.rotation.y = t * 0.5
        group.current.position.y = -1.5
    }
  })
  
  return (
    <group ref={group} {...props} dispose={null} scale={0.8}>
      {/* Main Body */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.3, 3]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      {/* Nose */}
      <mesh position={[0, 0.1, 1.8]}>
        <boxGeometry args={[0.5, 0.1, 0.8]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      {/* Front Wing */}
      <mesh position={[0, 0.1, 2.2]}>
        <boxGeometry args={[1.6, 0.05, 0.4]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      {/* Rear Wing */}
      <mesh position={[0, 0.6, -1.3]}>
        <boxGeometry args={[1.5, 0.05, 0.5]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[-0.6, 0.4, -1.3]}>
        <boxGeometry args={[0.1, 0.5, 0.5]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[0.6, 0.4, -1.3]}>
        <boxGeometry args={[0.1, 0.5, 0.5]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      {/* Cockpit */}
      <mesh position={[0, 0.4, -0.2]}>
        <boxGeometry args={[0.6, 0.3, 0.8]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      {/* Wheels */}
      {/* Front Left */}
      <mesh position={[-0.8, 0.2, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {/* Front Right */}
      <mesh position={[0.8, 0.2, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {/* Rear Left */}
      <mesh position={[-0.8, 0.3, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {/* Rear Right */}
      <mesh position={[0.8, 0.3, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  )
}
