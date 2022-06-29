import { Suspense, useRef, useEffect, useState } from 'react';
import {
  Canvas,
  useThree,
  pointLight,
  ambientLight,
  useFrame,
} from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import useScreenMediaQuery from '../hooks/useScreenMediaquery';
import Scene from '../components/Scene';
import LoaderContainer from './LoaderContainer';
import styles from '../styles/VoxelModel.module.sass';

const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <OrbitControls args={[camera, domElement]} enableDamping />;
};
const CameraHelper = () => {
  const camera = new THREE.OrthographicCamera(-245, 245, 274, -274, 0.01, 5000);
  return (
    <group>
      <cameraHelper
        args={[camera]}
        position={[20 * Math.sin(0.2 * Math.PI), 5, 25 * Math.cos(2 * Math.PI)]}
      />
    </group>
  );
};

const Animation = () => {
  const [modelScale, setModelScale] = useState([0.1, 0.1, 0.1]);
  const { isMatched: tablet } = useScreenMediaQuery(768);

  const [target] = useState(new THREE.Vector3(-0.5, -120, -100));

  const voxel = useRef();
  // useFrame(({ clock }) => {
  //   const animate = clock.getElapsedTime() / 4;
  //   voxel.current.rotation.y = -animate;
  // });
  return (
    <mesh ref={voxel}>
      {tablet && (
        <Scene position={[-0.5, -120, -150]} scale={[0.15, 0.15, 0.15]} />
      )}

      {!tablet && <Scene position={target} scale={modelScale} />}
    </mesh>
  );
};

export default function VoxelContainer() {
  const voxelRef = useRef();
  const [aspectWidth, setAspectWidht] = useState(null);
  const [aspectHeight, setAspectHeight] = useState(null);
  const [scale, setScale] = useState(null);
  const [target] = useState(new THREE.Vector3(-0.5, -100, 0));

  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.1 * Math.PI),
      5,
      20 * Math.cos(0.2 * Math.PI)
    )
  );

  useEffect(() => {
    const sh = voxelRef.current.clientHeight;
    const sw = voxelRef.current.clientWidth;
    const scale = sh * 0.05 + 4.8;
    setScale(scale);
    setAspectWidht(sw);
    setAspectHeight(sh);
  }, []);

  return (
    <div ref={voxelRef} className={styles.Model__container}>
      <Suspense fallback={null}>
        <Canvas
          orthographic
          camera={{
            left: -scale / 2,
            right: scale / 2,
            top: scale / 2,
            bottom: -scale / 2,
            near: 0.1,
            far: 5000,
            position: initialCameraPosition,
            lookat: { target },
          }}
        >
          <Animation />
          <pointLight
            position={[
              20 * Math.sin(0.2 * Math.PI),
              10,
              20 * Math.cos(0.2 * Math.PI),
            ]}
            intensity={0.3}
            color={'#FFFF'}
            far={500}
          />
          <ambientLight color={'#FFFF'} intensity={0.5} />
          {/* <Controls /> */}
          {/* <CameraHelper /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}
// 20 * Math.sin(20 * Math.PI),
// 10,
// 10 * Math.cos(10 * Math.PI),
