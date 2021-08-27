import { useState ,useEffect} from "react";


function Favorites({plantData}){
const [favorites, setFavorites] = useState([])

useEffect(() => {
fetch("http://localhost:9292/favorites")
.then((r) => r.json())
.then((data) => setFavorites(data))
},[])

// delete a fav
let deleteFav = (id) => { 
        fetch(`http://localhost:9292/favorites/${id}`, {
        method: "DELETE",
        })
        .then((r) => r.json())
        .then(newArray => setFavorites(newArray))
};



  
let allFav = favorites.map(fav => <li key={fav.id}> {fav.plant.plant_name} <button onClick={ () => deleteFav(fav.id)}> Delete 💥 </button></li>)

return (
        <div id ="fav-fav">
        <>
        {allFav}
        </>
        </div>
)
}




export default Favorites;


// .then(favorite => setFavorites([...favorite, favorites]));