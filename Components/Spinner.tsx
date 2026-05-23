import { Html, useProgress } from "@react-three/drei";
import style from "./Spinner.module.css";

export function Spinner() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span className={style.Spinner}>
        Loading {progress.toFixed(0)}%
      </span>
    </Html>
  )
}