import Button from "@/ui/Button";
import { memo } from "react";
import useCartStore from "@/store/cartStore";

interface UpdateItemQuantityProps {
  pizzaId: number;
  currentQuantity: number;
}

const UpdateItemQuantity: React.FC<UpdateItemQuantityProps> = ({
  pizzaId,
  currentQuantity,
}) => {
  const increaseQuantity = useCartStore((state) => state.increaseItemQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseItemQuantity);

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => decreaseQuantity(pizzaId)}>
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button type="round" onClick={() => increaseQuantity(pizzaId)}>
        +
      </Button>
    </div>
  );
};

export default memo(UpdateItemQuantity);
