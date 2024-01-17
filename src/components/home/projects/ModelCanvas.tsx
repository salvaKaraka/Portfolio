"use client"
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

type Model3DProps = {
    children: React.ReactNode;
    height: string;
    shadowPosition?: [number, number, number];
}

export default function Model3D({children, height, shadowPosition}: Model3DProps){
    
    return(
        <Canvas style={{height:`${height}`, width:"10rem"}}>
            <ambientLight intensity={0} />
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
            {children}
            </Suspense>
            <Environment preset="sunset" />
            <ContactShadows position={shadowPosition} opacity={1} scale={10} blur={3} far={10} resolution={256} color="#000"/>
        </Canvas>
    )
}