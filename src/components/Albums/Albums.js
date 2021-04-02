import Albums from "./Albums.module.css";

const Albums = ({ albumId }) => {
    const [ albumsId, setAlbums] = useState([]);
    
    return ( 
        <div className={classes.Albums}>
            {setAlbums}
        </div>
   );
}
      
  export default Albums;
  