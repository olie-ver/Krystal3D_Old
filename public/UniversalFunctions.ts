import { Display } from "./Types";

export function getDisplay(): Display {
    const display: string | null = localStorage.getItem("Display");
    if (display === null) {
        if (window.matchMedia("(prefers-theme-light)").matches) {
            return "LightMode"
        } else {
            return "DarkerMode";
        }
    } else {
        switch (display) {
            case "LightMode": case "DarkMode": case "DarkerMode": case "Midnight":
                return display;
            default:
                return "LightMode"
        }
    }
}

export const startsWith = (value: string, elements: HTMLCollectionOf<Element>): void => {
    for (let i = 0; i < elements.length; i++) {
        let title = elements[i].innerHTML.toLowerCase().replace(/\s/g, '').replace(/"/g, '');
        title = title.substring(0, value.length);
        if (title !== value) {
            hide(elements[i]);
        } else {
            show(elements[i]);
        }
    }
}

export const endsWith = (value: string, elements: HTMLCollectionOf<Element>): void => {
    for (let i = 0; i < elements.length; i++) {
        let title = elements[i].innerHTML.toLowerCase().replace(/\s/g, '').replace(/"/g, '');
        title = title.substring(title.length - value.length);
        if (title !== value) {
            hide(elements[i]);
        } else {
            show(elements[i]);
        }
    }
}

export const contains = (value: string, elements: HTMLCollectionOf<Element>): void => {
    for (let i = 0; i < elements.length; i++) {
        let title = elements[i].innerHTML.toLowerCase().replace(/\s/g, '').replace(/"/g, '');
        if (title.includes(value)) {
            show(elements[i]);
        }
    }
}

export const bringBack = (elements: HTMLCollectionOf<Element>): void => {
    for (let i = 0; i < elements.length; i++) {
        show(elements[i]);
    }
}

const hide = (element: Element): void => {
    const parent = element.parentNode;
    if (parent instanceof HTMLElement) {
        parent.style.display = "none";
        if (parent.parentNode instanceof HTMLElement) {
            parent.parentNode.style.display = "none";
        }
    }
}

const show = (element: Element): void => {
    const parent = element.parentNode;
    if (parent instanceof HTMLElement) {
        parent.style.display = "block";
        if (parent.parentNode instanceof HTMLElement) {
            parent.parentNode.style.display = "block"
        }
    }
}