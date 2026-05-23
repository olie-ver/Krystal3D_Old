import style from "./PreviewSkeleton.module.css";
import style2 from "../ImageButtons/ImageButton.module.css";

export const PreviewSlideSkeleton = () => {
    return (
        <div className={style.PreviewDiv} key = "PreviewContainer">
            <div className={style.SlideSkeleton} key="PreviewSlide"/>
            <div className={style.ButtonBox} key = "ButtonBox">
                <span className={style2.Label}></span>
                <span className={style2.Label}></span>
                <span className={style2.Label}></span>
                <span className={style2.Toggle2D3D}></span>
            </div>
        </div>
    )
}