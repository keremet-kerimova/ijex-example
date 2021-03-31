import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Coments.module.css";

const Coments = ({ message }) => {
    const [coments, setComents] = useState([]);
    console.log("[Coments.js] render");
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
        const coments = response.data;
        const onlyname = coments;
    setComents(onlyname);
              });
          }, []);
         const results = coments.map((coment)=>(
            <article key={coment.id}>
            <h2>{coment.name}</h2>
            <p>{coment.body}</p>
          </article>

         ))

    
    return (
        <div className={classes.Coments}>
          {results.lenght > 0 ? results : "Loading..."}
        </div>
      );
    }
    export default Coments;