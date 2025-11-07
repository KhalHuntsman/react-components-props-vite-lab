import React from "react";
import Article from "./Article";

function ArticleList({ posts }) { // set up to list out articles and article info 
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id} // unique key for each post
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
