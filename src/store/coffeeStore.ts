import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/coffee";
import { coffees } from "../data/coffees";

interface CoffeeStore {
  cart: CartItem[];
  isCartOpen: boolean;
  addCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCoffeeStore = create<CoffeeStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name:"coffee-station-cart",
      version:1,
      partialize:(state) => ({ cart: state.cart }),
      merge: (persisted, current) => {
        const saved = (persisted as { cart?: CartItem[] } | undefined)?.cart ?? [];
        const validCart = saved.filter(
          (item) =>
            coffees.some((coffee) => coffee.id === item.id) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0
        );
        return { ...current, cart: validCart };
      },
    }
  )
);

