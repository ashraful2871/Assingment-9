import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coupon Collect - About</title>
      </Helmet>
      <div>
        <p className="text-center text-xl font-semibold mt-20">
          My name is Md. Ashraful Islam. Now i am learning about "Web
          Development". <br />
          And i am student also.
        </p>
      </div>
    </>
  );
};

export default About;
