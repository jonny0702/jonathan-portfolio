import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree, pointLight, ambientLight } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import Scene from '../components/Scene';
import styles from '../styles/VoxelModel.module.sass';

const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <OrbitControls args={[camera, domElement]} enableDamping />;
};
const CameraHelper = () => {
  const camera = new THREE.OrthographicCamera(
    -245,
    245,
    274,
    -274,
    0.01,
    50000
  );
  return (
    <group>
      <cameraHelper
        args={[camera]}
        position={[
          20 * Math.sin(0.2 * Math.PI),
          10,
          20 * Math.cos(0.2 * Math.PI),
        ]}
      />
    </group>
  );
};
export default function VoxelContainer() {
  const [aspectWidth, setAspectWidht] = useState(null);
  const [aspectHeight, setAspectHeight] = useState(null);
  const [scale, setScale] = useState(null);
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [target] = useState(new THREE.Vector3(-20, -130, -100));

  const voxelRef = useRef();

  useEffect(() => {
    const sh = voxelRef.current.clientHeight;
    const sw = voxelRef.current.clientWidth;
    const scale = sh * 0.05 + 4.8;
    setScale(scale);
    setAspectWidht(sw);
    setAspectHeight(sh);
  }, []);
  console.log(aspectWidth);
  return (
    <div ref={voxelRef} className={styles.Model__container}>
      <Suspense fallback={null}>
        <Canvas
          orthographic
          camera={{
            left: -aspectWidth,
            right: aspectWidth,
            top: aspectHeight,
            bottom: -aspectHeight,
            near: 0.01,
            far: 500000,
            position: initialCameraPosition,
          }}
        >
          <Scene position={target} scale={[0.12, 0.12, 0.12]} />

          <pointLight
            position={[0, 0, 0]}
            intensity={0.2}
            color={'#FFF'}
            far={100}
          />
          <ambientLight color={'#FFFF'} intensity={0.5} />
          <Controls />
          <CameraHelper />
        </Canvas>
      </Suspense>
    </div>
  );
}
// 20 * Math.sin(20 * Math.PI),
// 10,
// 10 * Math.cos(10 * Math.PI),
