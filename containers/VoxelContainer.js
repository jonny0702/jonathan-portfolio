import { Suspense, useRef } from 'react';
import { Canvas, useThree, pointLight, ambientLight } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import Scene from '../components/Scene';
import styles from '../styles/VoxelModel.module.sass';

// const Controls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();
//   return <OrbitControls args={[camera, domElement]} enableDamping />;
// };
const CameraHelper = () => {
  const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 100);
  return (
    <group>
      <cameraHelper args={[camera]} />
    </group>
  );
};
export default function VoxelContainer() {
  return (
    <div className={styles.Model__container}>
      <Suspense fallback={null}>
        <Canvas
          orthographic
          camera={{
            left: -1000,
            right: 1000,
            top: 1000,
            bottom: -1000,
            near: 0.01,
            far: 500000,
            position: [0, 0, Math.pow(2.6, 10)],
          }}
        >
          <Scene
            position={[0, -500, -Math.pow(3.6, 10)]}
            scale={[0.5, 0.5, 0.5]}
          />
          {/* <mesh>
            <Box args={[1, 5, 1]} position={[0, 0, 0]}>
              <meshBasicMaterial color="hotpink" />
            </Box>
          </mesh> */}
          <pointLight
            position={[0, 0, 0]}
            intensity={0.2}
            color={'#FFF'}
            far={100}
          />
          <ambientLight color={'#FFFF'} intensity={0.5} />
          {/* <Controls /> */}
          <OrbitControls />
          <CameraHelper />
        </Canvas>
      </Suspense>
    </div>
  );
}
// 20 * Math.sin(20 * Math.PI),
// 10,
// 10 * Math.cos(10 * Math.PI),
