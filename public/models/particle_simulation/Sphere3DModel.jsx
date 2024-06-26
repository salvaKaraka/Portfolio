"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: sketchfab-migration (https://sketchfab.com/sketchfab-migration)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/sphere-c0c4239f106943e59c13cd624a6e6c8f
Title: Sphere
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/particle_simulation/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/models/particle_simulation/scene.gltf')
