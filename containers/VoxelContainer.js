import { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import Scene from '../components/Scene';
import styles from '../styles/VoxelModel.module.sass';

const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <OrbitControls args={[camera, domElement]} enableDamping />;
};

export default function VoxelContainer() {
  return (
    <div className={styles.Model__container}>
      <Suspense fallback={null}>
        <Canvas
          camera={{
            fov: 20,
            aspect: 100 / 100,
            far: 100,
            position: [0, 0, 0],
          }}
        >
          {/* <Scene position={[0, -700, 10]} /> */}
          <Box args={[1, 1, 1]} />
          <ambientLight intensity={2} />
          {/* <Controls /> */}
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}
