import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Pizza } from "@/components/menu/types";
import { memo } from "react";

const Menu: React.FC = () => {
  const menu = useLoaderData() as Pizza[];

  return (
    <ul className="divide-y divide-stone-200 px-4">
      {menu.map((pizza: Pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default memo(Menu);
