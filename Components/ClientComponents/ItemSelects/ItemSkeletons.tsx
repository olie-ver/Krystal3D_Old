import style from "./ItemSkeletons.module.css";
import style2 from "./ItemSelect.module.css";
import style3 from "../Logo/Logo.module.css";

import type { JSX } from "react";

export const ItemMenuSkeleton = () => {
    return (
        <div className = {style2.MaterialContainer}>
            <br/>
            <div className = {style2.ItemSelect}>
                <span className = {style.ItemSkeleton}/>
                <span className = {style.ItemSkeleton}/>
                <span className = {style.ItemSkeleton}/>
                <span className = {style.ItemSkeleton}/>
                <span className = {style.ItemSkeleton}/>
                <span className = {style.ItemSkeleton}/>
            </div>
        </div>
    )
}

export const MaterialItemsSkeleton: JSX.Element = (
    <div className = {style2.MaterialContainer}>
        <br/>
        <ItemMenuSkeleton/>
        <p className={style3.KrystalTxt}>Seamless Textures</p>
        <ItemMenuSkeleton/>
    </div>
);


export const SuggestionBannerSkeleton = (): JSX.Element => {
    return (
        <div className={style.SuggestionBannerSkeleton}>
            <span className = {style.ItemSkeleton}/>
            <span className = {style.ItemSkeleton}/>
            <span className = {style.ItemSkeleton}/>
            <span className = {style.ItemSkeleton}/>
        </div>
    )
}