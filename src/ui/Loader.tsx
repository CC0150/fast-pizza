import { memo } from "react";

const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-stone-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default memo(Loader);
