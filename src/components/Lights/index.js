import React from 'react';

export const Lights = () => {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry args={[0.6, 25, 25]} attach="geometry" />
        <meshStandardMaterial color={0xd7d3f2} attach="material" />
      </mesh>
    );
  };
  return (
    <group>
      <FakeSphere />
      <ambientLight intensity={0.7} />
      <pointLight intensity={2} position={[0, 0, 5]} />
    </group>
  )
}