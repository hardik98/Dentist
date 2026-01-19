import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Sphere, Cylinder, Cone } from '@react-three/drei';
import * as THREE from 'three';

export function AbstractTooth() {
    const toothRef = useRef();

    // Gentle rotation for the 3D showcase
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (toothRef.current) {
            toothRef.current.rotation.y = t * 0.15;
            toothRef.current.rotation.x = Math.sin(t * 0.3) * 0.05;
        }
    });

    return (
        <group ref={toothRef}>
            <RealisticTooth />
        </group>
    );
}

function RealisticTooth() {
    // More realistic tooth material - white with slight translucency
    const enamelMaterial = {
        transmission: 0.3,
        thickness: 0.8,
        roughness: 0.1,
        ior: 1.4,
        chromaticAberration: 0.02,
        anisotropy: 0.05,
        clearcoat: 0.8,
        attenuationDistance: 1,
        attenuationColor: '#ffffff',
        color: '#fefefe',
        metalness: 0.1,
    };

    return (
        <group scale={2.2}>
            {/* Main Crown - More tooth-like shape */}
            <mesh position={[0, 0.3, 0]}>
                <boxGeometry args={[1.2, 0.8, 1.0]} />
                <meshStandardMaterial 
                    color="#fefefe" 
                    roughness={0.2}
                    metalness={0.1}
                    transparent
                    opacity={0.95}
                />
            </mesh>

            {/* Top Cusps - Four main cusps of a molar */}
            <group position={[0, 0.7, 0]}>
                {/* Mesiobuccal cusp */}
                <Sphere args={[0.25, 16, 16]} position={[0.3, 0, 0.3]}>
                    <meshStandardMaterial 
                        color="#fefefe" 
                        roughness={0.15}
                        metalness={0.1}
                    />
                </Sphere>
                {/* Distobuccal cusp */}
                <Sphere args={[0.25, 16, 16]} position={[-0.3, 0, 0.3]}>
                    <meshStandardMaterial 
                        color="#fefefe" 
                        roughness={0.15}
                        metalness={0.1}
                    />
                </Sphere>
                {/* Mesiolingual cusp */}
                <Sphere args={[0.25, 16, 16]} position={[0.3, 0, -0.3]}>
                    <meshStandardMaterial 
                        color="#fefefe" 
                        roughness={0.15}
                        metalness={0.1}
                    />
                </Sphere>
                {/* Distolingual cusp */}
                <Sphere args={[0.25, 16, 16]} position={[-0.3, 0, -0.3]}>
                    <meshStandardMaterial 
                        color="#fefefe" 
                        roughness={0.15}
                        metalness={0.1}
                    />
                </Sphere>
            </group>

            {/* Root - Tapered cylinder */}
            <Cylinder 
                args={[0.4, 0.2, 1.2, 8]} 
                position={[0, -0.4, 0]}
                rotation={[0, 0, 0]}
            >
                <meshStandardMaterial 
                    color="#f5f5f5" 
                    roughness={0.3}
                    metalness={0.05}
                />
            </Cylinder>

            {/* Root tips - Two roots for a molar */}
            <Cone 
                args={[0.15, 0.6, 8]} 
                position={[0.25, -1.0, 0.1]}
                rotation={[0.1, 0, 0.1]}
            >
                <meshStandardMaterial 
                    color="#f0f0f0" 
                    roughness={0.4}
                />
            </Cone>
            <Cone 
                args={[0.15, 0.6, 8]} 
                position={[-0.25, -1.0, 0.1]}
                rotation={[0.1, 0, -0.1]}
            >
                <meshStandardMaterial 
                    color="#f0f0f0" 
                    roughness={0.4}
                />
            </Cone>
        </group>
    );
}
