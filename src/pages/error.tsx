import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  const errorRenderer = () => {
    if (isRouteErrorResponse(error)) {
      return (
        <div>
          <h1>{error.status}</h1>
          <p>{error.statusText}</p>
          <p>{error.data?.message && <p>{error.data.message}</p>}</p>
        </div>
      );
    }

    if (error instanceof Error && "message" in error) {
      return <>{error.message}</>;
    }

    return <>Unknown Error</>;
  };

  return (
    <div>
      {errorRenderer()}
      <button>
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
};
