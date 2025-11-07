import React from "react"; // setting up React dependencies/libraries
import blogData from "../data/blog"; // import blog component data
import Header from "./Header"; // import Header component data
import About from "./About"; // import About component data
import ArticleList from "./ArticleList"; // import ArticleList component data

console.log(blogData);

function App() { // set up to display all relevant info from children componenets
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
