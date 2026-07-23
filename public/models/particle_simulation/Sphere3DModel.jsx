"use client"
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Sphere3DModel(props) {
  const meshRef = useRef()
  const count = 100
  
  // Generate random initial positions and velocities for the particles
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 4
      const y = (Math.random() - 0.5) * 4
      const z = (Math.random() - 0.5) * 4
      const vx = (Math.random() - 0.5) * 0.02
      const vy = (Math.random() - 0.5) * 0.02
      const vz = (Math.random() - 0.5) * 0.02
      temp.push({ position: new THREE.Vector3(x, y, z), velocity: new THREE.Vector3(vx, vy, vz) })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(() => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        // Update positions
        particle.position.add(particle.velocity)

        // Simple boundary check to keep them inside a box
        if (particle.position.x > 2 || particle.position.x < -2) particle.velocity.x *= -1
        if (particle.position.y > 2 || particle.position.y < -2) particle.velocity.y *= -1
        if (particle.position.z > 2 || particle.position.z < -2) particle.velocity.z *= -1

        dummy.position.copy(particle.position)
        dummy.updateMatrix()
        meshRef.current.setMatrixAt(i, dummy.matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
      
      // Rotate the whole group slowly
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x += 0.002
    }
  })

  return (
    <group {...props} dispose={null} scale={0.8} position={[0, -1, 0]}>
      <instancedMesh ref={meshRef} args={[null, null, count]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
      </instancedMesh>
    </group>
  )
}
