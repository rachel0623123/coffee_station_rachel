import type { TestimonialData} from "../types/coffee";

const testimonialImage = import.meta.glob("../assets/images/customers/*.avif", {
  eager: true, import: "default",
}) as Record<string, string>;
const testimonialImages: string[] = Object.keys(testimonialImage).map((path) => testimonialImage[path]);

export const testimonials: TestimonialData[] = [
    {
        id: 1,
        quote: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        name: "Rajesh",
        role: "Freelance designer",
        avatar: testimonialImages[0],
    },
    {
        id: 2,
        quote: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        name: "Rajesh",
        role: "Freelance designer",
        avatar: testimonialImages[2],
    },
    {
        id: 3,
        quote: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        name: "Rajesh",
        role: "Freelance designer",
        avatar: testimonialImages[3],
    },
    {
        id: 4,
        quote: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        name: "Rajesh",
        role: "Freelance designer",
        avatar: testimonialImages[4],
    }, {
        id: 5,
        quote: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        name: "Rajesh",
        role: "Freelance designer",
        avatar: testimonialImages[1],
    }
]