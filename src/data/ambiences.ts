import type { Ambience} from "../types/coffee";


const ambience = import.meta.glob("../assets/images/ambience/*.avif", {
  eager: true, import: "default",
}) as Record<string, string>;
const ambienceImages: string[] = Object.keys(ambience).map((path) => ambience[path]);

export const ambiences: Ambience[] = [
    {
        id: 1,
        alt: "Latte",
        image: ambienceImages[0],
    },
    {
        id: 2,
        alt: "Latte1",
        image: ambienceImages[1],
    },
    {
        id: 3,
        alt: "Latte3",
        image: ambienceImages[2],
    },
    {
        id: 4,
        alt: "Latte4",
        image: ambienceImages[3],
    },
    {
        id: 5,
        alt: "Latte5",
        image: ambienceImages[4],
    },
    {
        id: 6,
        alt: "Latte6",
        image: ambienceImages[5],
    }
]
