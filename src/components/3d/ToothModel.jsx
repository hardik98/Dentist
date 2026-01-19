import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Sphere, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export function AbstractTooth() {
    const toothRef = useRef();

    // Gentle rotation for the 3D showcase
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (toothRef.current) {
            toothRef.current.rotation.y = t * 0.2;
            toothRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
        }
    });

    return (
        <group ref={toothRef}>
            <AnatomicalMolar />
        </group>
    );
}

function AnatomicalMolar() {
    const enamelMaterial = {
        transmission: 0.9,
        thickness: 1.5,
        roughness: 0.05,
        ior: 1.5,
        chromaticAberration: 0.04,
        anisotropy: 0.1,
        distortion: 0.0,
        distortionScale: 0.5,
        temporalDistortion: 0.0,
        clearcoat: 1,
        attenuationDistance: 0.5,
        attenuationColor: '#ffffff',
        color: '#f8fafc',
    };

    return (
        <group scale={1.8}>
            {/* Main Crown Base - Rounded and Organic */}
            <RoundedBox args={[1.6, 1.2, 1.6]} radius={0.5} smoothness={4}>
                <MeshTransmissionMaterial {...enamelMaterial} />
            </RoundedBox>

            {/* Anatomical Cusps (The "Bumps" on a Molar) */}
            <group position={[0, 0.5, 0]}>
                {/* Four main cusp mounds */}
                <Sphere args={[0.45, 16, 16]} position={[0.4, 0.1, 0.4]}>
                    <MeshTransmissionMaterial {...enamelMaterial} />
                </Sphere>
                <Sphere args={[0.45, 16, 16]} position={[-0.4, 0.1, 0.4]}>
                    <MeshTransmissionMaterial {...enamelMaterial} />
                </Sphere>
                <Sphere args={[0.45, 16, 16]} position={[0.4, 0.1, -0.4]}>
                    <MeshTransmissionMaterial {...enamelMaterial} />
                </Sphere>
                <Sphere args={[0.45, 16, 16]} position={[-0.4, 0.1, -0.4]}>
                    <MeshTransmissionMaterial {...enamelMaterial} />
                </Sphere>

                {/* Central Fossa (The valley between cusps) */}
                <Sphere args={[0.3, 16, 16]} position={[0, -0.1, 0]}>
                    <MeshTransmissionMaterial {...enamelMaterial} />
                </Sphere>
            </group>

            {/* Subtle Bottom Taper (Start of root neck) */}
            <RoundedBox args={[1.4, 0.4, 1.4]} radius={0.4} position={[0, -0.6, 0]}>
                <MeshTransmissionMaterial {...enamelMaterial} />
            </RoundedBox>
        </group>
    );
}
