import { create } from "zustand";
import { Cart } from "@/components/order/types";

interface CartStore {
  cart: Cart[];
  addItem: (item: Cart) => void;
  deleteItem: (pizzaId: number) => void;
  increaseItemQuantity: (pizzaId: number) => void;
  decreaseItemQuantity: (pizzaId: number) => void;
  clearCart: () => void;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getCart: () => Cart[];
  getQuantity: (pizzaId: number) => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addItem: (item: Cart) =>
    set((state) => {
      const index = state.cart.findIndex((i) => i.pizzaId === item.pizzaId);
      //检查是否购物车中已经存在该商品
      if (index !== -1) {
        //如果购物车中已经存在该商品，则增加数量
        state.cart[index].quantity += 1;
        state.cart[index].totalPrice =
          state.cart[index].quantity * state.cart[index].unitPrice;
      } else {
        //如果购物车中不存在该商品，则直接添加
        state.cart.push(item);
      }
      return {
        cart: state.cart,
      };
    }),
  deleteItem: (pizzaId: number) =>
    set((state) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== pizzaId);
      return {
        cart: state.cart,
      };
    }),
  increaseItemQuantity: (pizzaId: number) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item.pizzaId === pizzaId);
      const item = state.cart[index];
      get().addItem(item);
      return {
        cart: state.cart,
      };
    }),
  decreaseItemQuantity: (pizzaId: number) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item.pizzaId === pizzaId);
      if (state.cart[index].quantity <= 1) {
        get().deleteItem(pizzaId);
        return {
          cart: state.cart,
        };
      }
      state.cart[index].quantity -= 1;
      state.cart[index].totalPrice =
        state.cart[index].quantity * state.cart[index].unitPrice;
      return {
        cart: state.cart,
      };
    }),
  clearCart: () => set({ cart: [] }),
  getTotalQuantity: () =>
    get().cart.reduce((acc, item) => acc + item.quantity, 0),
  getTotalPrice: () =>
    get().cart.reduce((acc, item) => acc + item.totalPrice, 0),
  getCart: () => get().cart,
  getQuantity: (pizzaId: number) => {
    const item = get().cart.find((item) => item.pizzaId === pizzaId);
    return item ? item.quantity : 0;
  },
}));

export default useCartStore;
