import PlantDescription from './PlantDescription'
import { useState } from "react"

function Plant({ data }) {
  

// Showing the description
  const [description, setDescription] = useState(false)
  const desClickHandler = () => {setDescription(!description) }
  
  
  // adding a new favorite
  const addFav = () => {fetch("http://localhost:9292/myFavorites", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({
    plant_id: data.id ,
    user_id: 1,
    }),
    });
    }
  
  
  
  return (
      <div id="plant-grid">
        <img id="plant-img" src={data.image_url} alt="Plants"/>
        <div id="buttons">
        <button onClick={desClickHandler}>Description 🔍</button>
       {description ? <PlantDescription data={data}/> : null}
        <button onClick={addFav}>Add To Favorites ❤️</button>
        </div>
        <h4 id="plant-names">
          "{data.latin_name}" or {data.plant_name}
        </h4>
        <p id="fav-fav">Price: ${data.price}</p>
      </div>
        
  );
};

  export default Plant;