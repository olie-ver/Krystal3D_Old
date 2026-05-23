"use client"
import { Dispatch, SetStateAction } from "react";
import style  from "./ImageButton.module.css";

export const ImageButton = ({src, index, display, onSelect}: {key: number, src: string, index: number, display: boolean,
                                        onSelect: Dispatch<SetStateAction<string>>}) => {
    return (
        <>
            <input type = "radio" id = {`${index}`} name = {"Images"}
                className = {style.Radio} onChange = {() => {console.log("image click"); onSelect(src)}}></input>
            <label htmlFor = {`${index}`} className = {style.Label} style={{display: display ? "block" : "none"}}></label>
        </>
    );
}

export const ModelButton = ({index, model, display, onSelect}:
        {index: number, model: number, display: boolean, onSelect: Dispatch<SetStateAction<number>>}) => {
    return (
        <>
            <input type = "radio" id = {`${index}Model`} name = {"Models"}
                className = {style.Radio} onChange = {() => onSelect(model)}></input>
            <label htmlFor = {`${index}Model`} className = {style.Label} style={{display: display? "block" : "none"}}></label>
        </>
    );
}

export const Toggle2D3D = ({current, onClick}: {current: boolean, onClick: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <span className={style.Toggle2D3D} onClick={() => onClick(!current)}></span>
    );
}