/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Diego G. (https://sketchfab.com/empty_mirror)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/keyboardist-robot-1510292849ab4f5d9de37a01645c47a7
title: Keyboardist Robot
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/scene.gltf');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.Keyboard.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="ee94a29d37a0437080aa8a3c2990bfdbfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Mano-Der"
                  position={[-289.33, 924.55, 379.69]}
                  rotation={[2.11, 0, -Math.PI / 2]}
                  scale={[1, 0.95, 1]}
                >
                  <mesh
                    name="Mano-Der_palette001_0"
                    geometry={nodes['Mano-Der_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Mano-Izq"
                  position={[286.67, 931.26, 400.85]}
                  rotation={[2.11, 0, Math.PI / 2]}
                  scale={[1, 0.95, 1]}
                >
                  <mesh
                    name="Mano-Izq_palette001_0"
                    geometry={nodes['Mano-Izq_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Brazo-Izq"
                  position={[292.76, 1147.43, 188.41]}
                  rotation={[0.9, -Math.PI / 2, 0]}
                >
                  <mesh
                    name="Brazo-Izq_palette001_0"
                    geometry={nodes['Brazo-Izq_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Brazo-Der"
                  position={[-295.21, 1142.85, 179.99]}
                  rotation={[0.93, Math.PI / 2, 0]}
                >
                  <mesh
                    name="Brazo-Der_palette001_0"
                    geometry={nodes['Brazo-Der_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Cabeza"
                  position={[-0.28, 1497.94, 157.88]}
                  rotation={[1.88, 0, 0]}
                >
                  <group
                    name="Cube"
                    position={[0.28, 160.17, 10.13]}
                    rotation={[-1.56, 0, 0]}
                  >
                    <mesh
                      name="Cube_Cristal_0"
                      geometry={nodes.Cube_Cristal_0.geometry}
                      material={materials.Cristal}
                    />
                  </group>
                  <mesh
                    name="Cabeza_palette002_0"
                    geometry={nodes.Cabeza_palette002_0.geometry}
                    material={materials['palette.002']}
                  />
                  <mesh
                    name="Cabeza_Material001_0"
                    geometry={nodes.Cabeza_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Torso"
                  position={[1.61, 1027.04, 81.15]}
                  rotation={[1.71, 0, 0]}
                >
                  <mesh
                    name="Torso_palette001_0"
                    geometry={nodes.Torso_palette001_0.geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Pierna-Der"
                  position={[-148.7, 603.6, 66.82]}
                  rotation={[1.48, 0, 0]}
                >
                  <mesh
                    name="Pierna-Der_palette001_0"
                    geometry={nodes['Pierna-Der_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Pierna-Izq"
                  position={[149.98, 603.79, 66.23]}
                  rotation={[1.48, 0, 0]}
                >
                  <mesh
                    name="Pierna-Izq_palette001_0"
                    geometry={nodes['Pierna-Izq_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Pie-Der"
                  position={[-149.43, 200.74, 77.13]}
                  rotation={[1.65, 0, 0]}
                >
                  <mesh
                    name="Pie-Der_palette001_0"
                    geometry={nodes['Pie-Der_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Pie-Izq"
                  position={[148.49, 197.71, 77.84]}
                  rotation={[1.65, 0, 0]}
                >
                  <mesh
                    name="Pie-Izq_palette001_0"
                    geometry={nodes['Pie-Izq_palette001_0'].geometry}
                    material={materials['palette.001']}
                  />
                </group>
                <group
                  name="Teclado-Piano"
                  position={[0, 0, 698.38]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.9}
                >
                  <mesh
                    name="Teclado-Piano_palette003_0"
                    geometry={nodes['Teclado-Piano_palette003_0'].geometry}
                    material={materials['palette.003']}
                  />
                  <mesh
                    name="Teclado-Piano_Material002_0"
                    geometry={nodes['Teclado-Piano_Material002_0'].geometry}
                    material={materials['Material.002']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');