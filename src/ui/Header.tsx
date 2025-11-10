import SearchOrder from "@/components/order/SearchOrder";
import Username from "@/components/user/Username";
import { memo } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        <h1>Fast Pizza.</h1>
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
};

export default memo(Header);
