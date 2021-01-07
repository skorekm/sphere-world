import React, { useRef } from 'react';
import { Sphere } from './Sphere';
import { map } from 'lodash';
import { useFrame } from "react-three-fiber";

export const Spheres = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.005;
  });
  const sphereNodes = map(new Array(20), (el, i) => {
    return <Sphere key={i} />;
  });
  return (
    <group ref={group}>
      {sphereNodes}
    </group>
  )
}