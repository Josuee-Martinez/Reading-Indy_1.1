import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

const Home = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/account" />;
  }
  return (
    <Fragment>
      <div className="landing-section">
        <div className="landing">
          <h1 className="landing-heading">Welctome to Reading Indy.</h1>
          <p className="landing-paragraph">
            Join the Indianapolis reading community!
          </p>
          <Link to="/signup">
            <button className="btn">Sign up!</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
