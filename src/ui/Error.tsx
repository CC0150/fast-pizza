import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { memo } from "react";

interface ErrorType {
  status: number;
  statusText: string;
  data?: string;
  internal: boolean;
  error?: Error;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as ErrorType;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.error?.message || error.data || "Unknown error occurred"}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default memo(ErrorPage);
