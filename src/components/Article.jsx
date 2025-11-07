import React from "react";
function Article({title, date = "January 1, 1970", preview }) { // defined title, date, and preview and set up to pass and display info as needed 
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;