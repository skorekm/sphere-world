import React from 'react';
import { BackSide } from 'three';

export const Environment = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 5]} attach="geometry" />
      <meshStandardMaterial
        color={0x0b0520}
        attach="material"
        side={BackSide}
        metalness={0.2}
      />
    </mesh>
  )
}