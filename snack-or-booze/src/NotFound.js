import React from "react";
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <section className="col-md-8" style={{color: "black"}}>
      <p>Hmmm. I can't seem to find the page you're looking for.</p>
      <Link to='/'>Home</Link>
    </section>
  );
};

export default NotFound;