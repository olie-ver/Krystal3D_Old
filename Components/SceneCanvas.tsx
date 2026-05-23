"use client";
//Need to separate into multiple files
import { OrbitControls, Environment, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export const SceneCanvas = ({children}: {children: React.ReactNode}) => {
    return (
        <Canvas id = "ModelViewer" style = {{cursor: "pointer"}} camera = {{position: [0,0,2.5]}}>
            <Preload all/>
            <OrbitControls maxDistance={3} minDistance={1.6}/>
            <Environment preset="warehouse" environmentIntensity={2.5}/>
            {children}
        </Canvas>
    )
}

export const PrintCanvas = ({children}: {children: React.ReactNode}) => {
    return (
        <Canvas id = "ModelViewer" style = {{cursor: "pointer"}} camera = {{position: [0,0,2.5]}}>
            <Preload all/>
            <OrbitControls maxDistance={3} minDistance={1.6}/>
            <Environment preset="warehouse" environmentIntensity={1}/>
            {children}
        </Canvas>
    )
}