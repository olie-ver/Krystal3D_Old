import { useGLTF } from "@react-three/drei";

export const Model = ({ model }: { model: { path: string; name: string } }) => {
  const { nodes } = useGLTF(model.path);

  return (
    <group>
      {Object.entries(nodes).map(([key, node]: any[]) =>
        node.geometry ? (
          <mesh
            key={key}
            geometry={node.geometry}
            material={node.material}
            dispose={null}
          />
        ) : null
      )}
    </group>
  );
};
