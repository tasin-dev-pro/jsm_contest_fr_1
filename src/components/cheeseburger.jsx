import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html } from '@react-three/drei';

// Custom Model component
function Model() {
  const { scene } = useGLTF('/mid_poly_cheeseburger.glb'); // Load the 3D model
  return <primitive object={scene} scale={1} />; // Add the loaded model to the scene
}

// Main App component
export default function App() {
  return (
    <div style={{ width: '100%', height: '100%',paddingTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className='-z-10'>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        {/* Subtle ambient light for overall visibility */}
        <ambientLight intensity={0.5} />

        {/* Strong directional light to mimic sunlight, with shadows */}
        <directionalLight
          castShadow
          intensity={1}
          position={[5, 10, 5]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Spotlight for more focused lighting */}
        <spotLight
          castShadow
          intensity={0.8}
          angle={0.3}
          position={[5, 10, 10]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Wrap model in suspense to allow lazy loading */}
        <Suspense fallback={<Html><span>Loading...</span></Html>}>
          <Model />
        </Suspense>

        {/* Optional for camera movement */}
        <OrbitControls autoRotate={true} enableZoom={false} />
      </Canvas>
    </div>
  );
}
