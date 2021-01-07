import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import { random } from 'lodash'
export const Sphere = () => {
  const mesh = useRef();
  const time = useRef(0);

  const position = useMemo(() => {
    return [
      random(-2.5, 2.5, true),
      random(-2.5, 2.5, true),
      random(-2.5, 2.5, true),
    ]
  }, [])

  const timeMod = useMemo(() => random(0.1, 4, true), []);

  useFrame(() => {
    mesh.current.rotation.y += 0.01 * timeMod;
    time.current += 0.03;
  });

  return (
    <mesh
      ref={mesh}
      position={position}
    >
      <sphereBufferGeometry args={[0.1, 25, 25]} attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color={0xe5d54d}
        metalness={0.4}
      />
    </mesh>
  )
}