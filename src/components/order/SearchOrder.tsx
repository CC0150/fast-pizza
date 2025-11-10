import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder: React.FC = () => {
  const [orderId, setOrderId] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orderId) return;
    navigate(`/order/${orderId}`);
    setOrderId("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Search order #"
          className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </form>
    </div>
  );
};

export default memo(SearchOrder);
