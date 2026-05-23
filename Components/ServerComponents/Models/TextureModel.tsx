import { Texture } from '@/public/Types';
import { useLoader } from '@react-three/fiber'
import { DoubleSide, RepeatWrapping, TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const TextureModel = ({path, name, texture}: {path: string, name: string, texture: Texture}) => {
    const { nodes }: any = useLoader(GLTFLoader, path);

    let [alpha, ao, color, displacement, emissive, metalness, normal, roughness]: any[] = useLoader(TextureLoader,
        [texture.alpha, texture.ao, texture.color,
        texture.displacement, texture.emissive, texture.metalness,
        texture.normal, texture.roughness]);

    alpha = texture.alpha === "/NullImg.png" ? null : alpha;
    ao = texture.ao === "/NullImg.png" ? null : ao;
    color = texture.color === "/NullImg.png" ? null : color;
    displacement = texture.displacement === "/NullImg.png" ? null : displacement;
    emissive = texture.emissive === "/NullImg.png" ? null: emissive;
    metalness = texture.metalness === "/NullImg.png" ? null : metalness;
    normal = texture.normal === "/NullImg.png" ? null : normal;
    roughness = texture.roughness === "/NullImg.png" ? null : roughness;

    alpha ? (alpha.flipY = false, alpha.wrapS = alpha.wrapT = RepeatWrapping) : void (0);
    ao ? (ao.flipY = false, ao.wrapS = ao.wrapT = RepeatWrapping) : void (0);
    color ? (color.flipY = false, color.wrapS = color.wrapT = RepeatWrapping) : void (0);
    displacement ? (displacement.flipY = false, displacement.wrapS = displacement.wrapT = RepeatWrapping) : void (0);
    emissive ? (emissive.flipY = false, emissive.wrapS = emissive.wrapT = RepeatWrapping) : void (0);
    metalness ? (metalness.flipY = false, metalness.wrapS = metalness.wrapT = RepeatWrapping) : void (0);
    normal ? (normal.flipY = false, normal.wrapS = normal.wrapT = RepeatWrapping) : void (0);
    roughness ? (roughness.flipY = false, roughness.wrapS = roughness.wrapT = RepeatWrapping) : void (0);

    return (<mesh geometry={nodes[name].geometry} position={[0,0,0]} dispose={null}>
        <meshStandardMaterial
            side = {DoubleSide}
            alphaMap = {alpha}
            aoMap={ao}
            map = {color}
            displacementMap={displacement} displacementBias={-0.5}
            emissiveMap={emissive}
            metalnessMap = {metalness} metalness = {metalness ? 1 : 0}
            bumpMap = {normal}
            roughnessMap={roughness}
        />
    </mesh>);
}