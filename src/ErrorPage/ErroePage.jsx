import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErroePage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3>OOpps!</h3>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page Not Found</h3>
          <p>Go Back Where you from</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErroePage;
