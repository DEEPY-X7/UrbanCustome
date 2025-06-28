import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import JeepModel from './JeepModel';

const Loader = () => (
  <Html center>
    <span className="text-white font-semibold text-lg">Loading 3D Model...</span>
  </Html>
);

const ThreeDViewer = () => {
  return (
    <section className="bg-black dark:bg-neutral-900 py-20 px-4" id="3d-view">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          3D Live Jeep Viewer
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Interact with our modified Jeep builds in full 360° view. Zoom, rotate, and inspect every custom detail in real-time.
        </p>

        <div className="h-[500px] rounded-xl overflow-hidden border border-gray-700 shadow-lg">
          <Canvas
            camera={{ position: [3, 2, 5], fov: 45 }}
            shadows
            gl={{ preserveDrawingBuffer: true }}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
            <Suspense fallback={<Loader />}>
              <JeepModel />
              <Environment preset="sunset" background />
            </Suspense>
            <OrbitControls
              enableZoom
              enablePan
              autoRotate
              autoRotateSpeed={2}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={0}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default ThreeDViewer;
