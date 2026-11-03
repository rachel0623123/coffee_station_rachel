import type { Staff } from "../types/coffee";

const staff = import.meta.glob("../assets/images/staffs/*.avif", {
  eager: true, import: "default",
}) as Record<string, string>;
const staffImages: string[] = Object.keys(staff).map((path) => staff[path]);

export const staffs: Staff[] = [
    {
        id: 1,
        alt: "Lisa",
        name: "Lisa",
        role: "Pastry Architect",
        image: staffImages[0],
    },
    {
        id: 2,
        alt: "Manoj",
        name: "Manoj",
        role: "Head Roaster",
        image: staffImages[1],
    },
    {
        id: 3,
        alt: "Krish",
        name: "Krish",
        role: "Master Barista",
        image: staffImages[2],
    },
]