import Button from "@/ui/Button";
import { memo } from "react";
import useCartStore from "@/store/cartStore";

interface DeleteItemProps {
  pizzaId: number;
}

const DeleteItem: React.FC<DeleteItemProps> = ({ pizzaId }) => {
  const deleteItem = useCartStore((state) => state.deleteItem);
  return (
    <Button type="small" onClick={() => deleteItem(pizzaId)}>
      Delete
    </Button>
  );
};

export default memo(DeleteItem);
