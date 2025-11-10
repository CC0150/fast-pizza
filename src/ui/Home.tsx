import CreateUser from "@/components/user/CreateUser";
import { memo } from "react";
import useUserStore from "@/store/userStore";
import Button from "./Button";

const Home: React.FC = () => {
  const userName = useUserStore((state) => state.userName);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        极致美味的披萨体验.
        <br />
        <div className="text-yellow-500">新鲜出炉，温暖直达您的味蕾.</div>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          continue ordering, {userName}
        </Button>
      )}
    </div>
  );
};

export default memo(Home);
