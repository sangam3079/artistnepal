import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

/*
const Blog = () => {


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch ('https://blog.songsnepal.com/wp-json/wp/v2/posts')
    .then(res =>  
      res.json())
    .then(data => 
    setBlogs(data.slice(0,3))
    //console.log(data)
    )
  }, []);
  
  return(
    <div>
      {blogs && <BlogList blogs={blogs} /> }
    </div>
  )
}

export default Blog;

*/

const Blog = () => {
	return (
		<div>
			<h1> </h1>
		</div>
	);
};

export default Blog;
