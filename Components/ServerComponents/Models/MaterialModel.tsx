import { DoubleSide, RepeatWrapping, TextureLoader } from 'three';
import { Models } from '@/public/Types';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const MaterialModel = ({model}: {model: Models}) => {
  const { nodes }: any = useGLTF(model.path);

  let [alpha, ao, color, displacement, emissive, metalness, normal, roughness]: any[] = useLoader(TextureLoader,
    [model.alpha, model.ao, model.color,
    model.displacement, model.emissive, model.metalness,
    model.normal, model.roughness]);

  alpha = model.alpha === "/NullImg.png" ? null : alpha;
  ao = model.ao === "/NullImg.png" ? null : ao;
  color = model.color === "/NullImg.png" ? null : color;
  displacement = model.displacement === "/NullImg.png" ? null : displacement;
  emissive = model.emissive === "/NullImg.png" ? null: emissive;
  metalness = model.metalness === "/NullImg.png" ? null : metalness;
  normal = model.normal === "/NullImg.png" ? null : normal;
  roughness = model.roughness === "/NullImg.png" ? null : roughness;

  alpha ? alpha.flipY = false : void (0);
  ao ? ao.flipY = false : void (0);
  color ? color.flipY = false : void (0);
  displacement ? displacement.flipY = false : void (0);
  emissive ? emissive.flipY = false : void (0);
  metalness ? metalness.flipY = false : void (0);
  normal ? normal.flipY = false : void (0);
  roughness ? roughness.flipY = false : void (0);

  return (
    <mesh geometry={nodes[model.name].geometry} position={[0, 0, 0]} dispose={null}>
      <meshStandardMaterial
        side = {model.displacement ? DoubleSide : model.name === "Plane" ? DoubleSide : undefined}
        alphaMap = {alpha} aoMap={ao}
        map = {color} displacementMap={displacement} displacementBias={-0.5}
        emissiveMap={emissive} metalnessMap = {metalness} metalness = {metalness ? 1 : 0}
        bumpMap = {normal} roughnessMap={roughness}
        />
    </mesh>
  )
}