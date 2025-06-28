// client/src/components/3D/JeepModel.jsx

import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white font-semibold text-lg animate-pulse">
        Loading {Math.floor(progress)}%
      </div>
    </Html>
  );
};

const Jeep = () => {
  const { scene } = useGLTF(
    'https://res.cloudinary.com/your-cloud-name/raw/upload/v1710000000/jeep_model.glb'
  );
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} />;
};

const JeepModel = () => {
  const { viewport } = useThree();

  return (
    <Suspense fallback={<Loader />}>
      <Jeep />
    </Suspense>
  );
};

useGLTF.preload('https://res.cloudinary.com/your-cloud-name/raw/upload/v1710000000/jeep_model.glb');

export default JeepModel;
