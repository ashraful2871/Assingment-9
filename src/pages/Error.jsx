import React from "react";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error</title>
        <link
          rel="shortcut icon"
          href="https://i.ibb.co.com/TRpC54r/errrthumbnail.jpg"
          type="image/x-icon"
        />
      </Helmet>

      <div className="text-center mt-80">
        <span className="text-8xl font-bold">404</span>
        <h2 className="text-5xl mb-5 mt-8 font-bold">oops... page not found</h2>
        <p className="font-bold mt-5 text-xl">
          we don&apos;t know how you ended up here, but you should go away now.
        </p>
      </div>
    </>
  );
};

export default Error;
