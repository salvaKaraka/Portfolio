"use client"
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Robot3DModel(props) {
  const group = useRef()
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if(group.current) {
        group.current.position.y = Math.sin(t) * 0.1 - 1.2
    }
    if(ring1.current) {
        ring1.current.rotation.x = t * 0.5
        ring1.current.rotation.y = t * 0.2
    }
    if(ring2.current) {
        ring2.current.rotation.y = t * 0.5
        ring2.current.rotation.z = t * 0.3
    }
    if(ring3.current) {
        ring3.current.rotation.x = t * 0.3
        ring3.current.rotation.z = t * 0.5
    }
  })
  
  return (
    <group ref={group} {...props} dispose={null} scale={1.2}>
      {/* Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} />
      </mesh>
      
      {/* Ring 1 */}
      <mesh ref={ring1}>
        <torusGeometry args={[0.8, 0.05, 16, 100]} />
        <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.5} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2}>
        <torusGeometry args={[1.0, 0.03, 16, 100]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} />
      </mesh>

      {/* Ring 3 */}
      <mesh ref={ring3}>
        <torusGeometry args={[1.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}
