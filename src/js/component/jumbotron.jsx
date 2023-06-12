import React from "react";

export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p>
        It uses utility class for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};
