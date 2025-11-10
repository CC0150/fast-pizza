import { memo } from "react";

import useUserStore from "@/store/userStore";

const Username: React.FC = () => {
  const userName = useUserStore((state) => state.userName);

  if (!userName) {
    return null;
  }

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
};

export default memo(Username);
