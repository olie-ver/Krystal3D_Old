"use client"
import { bringBack, startsWith, endsWith, contains } from "@/public/UniversalFunctions";
import { ChangeEvent, useEffect, useState } from "react";

export function StandardSearch() {
    const search = (evt: ChangeEvent<HTMLInputElement>, titles: HTMLCollectionOf<Element> | undefined): void => {
        if (titles) {
            const value = evt.target.value.toLowerCase().replace(/\s/g, '').replace(/"/g, '');
            if (value.length === 0) {
                bringBack(titles);
            } else if (!value.includes("-")) {
                startsWith(value, titles);
            } else if (value.charAt(0) !== "-" && value.charAt(value.length - 1) === "-") {
                startsWith(value.substring(0, value.length - 1), titles);
            } else if (value.charAt(0) === "-" && value.charAt(value.length - 1) !== "-") {
                endsWith(value.substring(1), titles);
            } else if (value.length > 1 && value.charAt(0) === "-" && value.charAt(value.length - 1) === "-") {
                contains(value.substring(1, value.length - 1), titles);
            }
        }
    }

    const [state, setState] = useState<{titles: HTMLCollectionOf<Element>| undefined}>({titles: undefined});

    useEffect(() => {
        setState(_prevState => {
            return {titles: document.getElementsByClassName("Title")};
        })
    }, []);
    return <input id = "Search" type = "text" placeholder = "Search..." onChange = {(evt => search(evt, state.titles))}></input>
}