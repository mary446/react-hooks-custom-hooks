import React, { useEffect} from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "./useDocumentTitle";
import useQuery from "./useQuery";
function HomePage() {
  const { data: posts, isLoaded }
   = useQuery("http://localhost:4000/posts");

  // useEffect(() => {
  //   setIsLoaded(false);
  //   fetch("http://localhost:4000/posts")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data);
  //       setIsLoaded(true);
  //     });
  // }, []);

  // set the document title
  useDocumentTitle("Underreacted | Home");
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
