export type Display = "LightMode" | "DarkMode" | "DarkerMode" | "Midnight";
export type Language = "EN-us";
export type Models = {
    path: string, name: string, alpha: string, ao: string,
    color: string, displacement: string, emissive: string, metalness: string,
    normal: string, roughness: string
};

export type Texture = {
    alpha: string, ao: string,
    color: string, displacement: string,
    emissive: string, metalness: string,
    normal: string, roughness: string
};

export const textures = new Map<string, any>();