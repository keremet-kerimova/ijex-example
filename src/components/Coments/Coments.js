import classes from "./Coments.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Coments = () => {

    const [coments, setComents] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
          .then((response) => {
            setComents(response.data.slice(0, 10));
          });
      }, []);
    
      const results = coments.map((coment) => (
        <article key = {coment.id}>
            <h2>{coment.name}</h2>
            <p>{coment.body}</p>
        </article>
      ))
    return ( 
        <div className = {classes.Coments}>
            {results}
        </div>
    );
}
 
export default Coments;