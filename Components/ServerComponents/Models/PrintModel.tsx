import { useGLTF } from '@react-three/drei';

export const PrintModel = ({model}: {model: {path: string, name: string}}) => {
  const { nodes }: any = useGLTF(model.path);

  console.log(nodes);

  return (
    <mesh geometry={nodes[model.name].geometry} position={[0, 0, 0]} dispose={null}>
        <meshStandardMaterial color="#999" metalness={0.1} roughness={0.8} />
    </mesh>
  );
}