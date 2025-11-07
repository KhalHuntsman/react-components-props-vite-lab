import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) { // set up component function to display info
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
