import Button from "@/ui/Button";
import LinkButton from "@/ui/LinkButton";
import { memo } from "react";
import CartItem from "./CartItem";
import useUserStore from "@/store/userStore";
import useCartStore from "@/store/cartStore";
import EmptyCart from "./EmptyCart";

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.getCart());
  const clearCart = useCartStore((state) => state.clearCart);

  const userName = useUserStore((state) => state.userName);

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => clearCart()}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default memo(Cart);
