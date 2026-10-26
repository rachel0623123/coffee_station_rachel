
import { create } from "zustand";
import type { Coffee, Ambience, TestimonialData, CartItem, Staff } from "../types/coffee";

interface CoffeeStore {
  coffees: Coffee[];
  ambiences: Ambience[];
  testimonials: TestimonialData[];
  staffs: Staff[];
  cart: CartItem[];
  isCartOpen: boolean;
  addCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
}

const products = import.meta.glob("../assets/images/products/*.avif", {
  eager: true, import: "default",
}) as Record<string, string>;
const productImages: string[] = Object.keys(products).map((path) => products[path])

const ambience = import.meta.glob("../assets/images/ambience/*.avif", {
  eager: true, import: "default",
}) as Record<string, string>;
const ambienceImages: string[] = Object.keys(ambience).map((path) => ambience[path]);

const testimonialImage = import.meta.glob("../assets/images/customers/*.avif", {
  eager: true, import: "default",
}) as Record<string, string>;
const testimonialImages: string[] = Object.keys(testimonialImage).map((path) => testimonialImage[path]);

const staff = import.meta.glob("../assets/images/staffs/*.avif", {
  eager: true, import: "default",
}) as Record<string, string>;
const staffImages: string[] = Object.keys(staff).map((path) => staff[path]);

export const useCoffeeStore = create<CoffeeStore>()((set) => ({
  coffees: [
    {
      id: 1,
      name: "Latte",
      price: 4.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Desserts",
      image: productImages[1],
    },
    {
      id: 2,
      name: "Americano",
      price: 9.5,
      star: 4.6,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Combos",
      image: productImages[2],
    },
    {
      id: 3,
      name: "Cappuccino",
      price: 14.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Combos",
      image: productImages[3],
    },
    {
      id: 4,
      name: "Cappuccino",
      price: 14.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Coffee",
      image: productImages[4],
    },
    {
      id: 5,
      name: "Cappuccino",
      price: 14.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Breakfast",
      image: productImages[5],
    },
    {
      id: 6,
      name: "Cappuccino",
      price: 14.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Tea",
      image: productImages[6],
    },
    {
      id: 7,
      name: "Cappuccino",
      price: 14.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Coffee",
      image: productImages[7],
    },
    {
      id: 8,
      name: "Cappuccino",
      price: 14.5,
      star: 4.9,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Coffee",
      image: productImages[8],
    },
    {
      id: 9,
      name: "Cappuccino",
      price: 14.5,
      star: 5.0,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Breakfast",
      image: productImages[9],
    },
    {
      id: 10,
      name: "Cappuccino",
      price: 14.5,
      star: 4.9,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Coffee",
      image: productImages[10],
    },
    {
      id: 11,
      name: "Cappuccino",
      price: 14.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Desserts",
      image: productImages[11],
    },
    {
      id: 12,
      name: "Cappuccino",
      price: 14.5,
      star: 4.9,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Tea",
      image: productImages[12],
    },
    {
      id: 13,
      name: "Cappuccino",
      price: 14.5,
      star: 4.3,
      content: "Espresso with vanilla syrup, milk, and caramel drizzle.",
      category: "Tea",
      image: productImages[13],
    },
  ],
  ambiences: [
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
  ],
  testimonials: [
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
  ],
  staffs: [
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
  ],
  cart: [],
  addCartItem: (id) =>
    set((state) => {
      const isExist = state.cart.find((item) => item.id === id);
      if (isExist) {
        return {
          cart: state.cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        }
      }
      return { cart: [...state.cart, { id, quantity: 1 }] };
    }),
  removeCartItem: (id) =>
    set((state) => (
      {
        cart: state.cart.filter((item) => item.id !== id),
      }
    )),
  decreaseCartItem: (id) =>
    set((state) => {
      const isExist = state.cart.find((item) => item.id === id);
      if (!isExist) {
        return state;
      }
      if (isExist.quantity <= 1) {
        return { cart: state.cart.filter((item) => item.id !== id), }
      }
      return {
        cart: state.cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      }
    }),
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));


