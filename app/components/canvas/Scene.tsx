"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import FloatingCrystal from "./FloatingCrystal";

export default function Scene() {
  return (
    <div className="h-[100vh] w-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        <Suspense fallback={null}>
          <FloatingCrystal />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}