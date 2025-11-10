import Button from "@/ui/Button";
import { memo } from "react";
import { OrderData } from "./types";
import { useFetcher } from "react-router-dom";

const UpdateOrder: React.FC<{ order: OrderData }> = ({ order }) => {
  const fetcher = useFetcher();
  console.log(order);
  return (
    <fetcher.Form method="patch" className="text-right">
      <Button type="primary">加急配送</Button>
    </fetcher.Form>
  );
};

export default memo(UpdateOrder);
