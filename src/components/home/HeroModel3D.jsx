
// 📁 src/components/HeroModel3D.jsx
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const HeroModel3D = () => {
  const mountRef = useRef(null);
  const [canRender, setCanRender] = useState(true);

  useEffect(() => {
    let renderer;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) throw new Error('WebGL not supported');
    } catch (err) {
      setCanRender(false);
      return;
    }

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (renderer) {
        renderer.dispose();
        if (mountRef.current) {
          mountRef.current.innerHTML = '';
        }
      }
    };
  }, []);

  if (!canRender) return null;

  return <div ref={mountRef} className="w-full h-full" />;
};

export default HeroModel3D;
