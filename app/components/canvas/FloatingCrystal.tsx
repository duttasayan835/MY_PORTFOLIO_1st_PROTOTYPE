"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function FloatingCrystal() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
    meshRef.current.position.y = Math.sin(time / 2) * 0.2;
    meshRef.current.scale.setScalar(1 + Math.sin(time / 3) * 0.1);
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 2]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        thickness={0.2}
        chromaticAberration={1}
        anisotropy={0.3}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        iridescence={1}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
      />
    </mesh>
  );
}