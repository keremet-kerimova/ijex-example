import axios from "axios";
import { useEffect, useState } from "react";
import Coments from "../Coments/Coments";
import classes from "./FullPost.module.css";
import Author from "../Author/Author";

const FullPost = ({ id }) => {
  const [post, setPost , SetuserId] = useState({
    title: "Loading...",
    body: "Wait for it!",
    userId:0
  });
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => {
        console.log(response);
        const post = response.data;
        setPost(post);
      });
  }, [id]);

  return (
    <div className={classes.FullPost}>
      <h1>{post.title}</h1>
     <p>{post.body}</p>
     <Coments postId={id} />
    <Author userId={ post.userId } />
    </div>
  );
}
export default FullPost;