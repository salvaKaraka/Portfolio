"use client"
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

type Model3DProps = {
  children: React.ReactNode;
  height: string;
  shadowPosition?: [number, number, number];
};

export default function Model3D({
  children,
  height,
  shadowPosition,
}: Model3DProps) {
  const [ref, inView] = useInView();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const canvasElement = canvasRef.current;
  
    if (canvasElement) {
      if (inView) {
        const interval = setInterval(() => {
          setRotation((prevRotation) => prevRotation + .02);
        }, 60);
        return () => clearInterval(interval);
      }
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ height: `${height}`, width: "10rem" }}>
      <Canvas
        ref={(canvas) => {
          canvasRef.current = canvas as HTMLCanvasElement;
        }}
        onCreated={({ gl }) => {
          // Configuraciones iniciales si es necesario
        }}
      >
        {inView && (
          <>
            <ambientLight intensity={0} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
            <mesh scale={1.16} rotation={[0,rotation,0]}>
                {children}
            </mesh>
            </Suspense>
            <Environment preset="sunset" />
            <ContactShadows
              position={shadowPosition}
              opacity={1}
              scale={10}
              blur={3}
              far={10}
              resolution={256}
              color="#000"
            />
          </>
        )}
      </Canvas>
    </div>
  );
}
