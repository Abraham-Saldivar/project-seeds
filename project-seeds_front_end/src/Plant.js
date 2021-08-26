import PlantDescription from './PlantDescription'
import { useState } from "react"

function Plant({ data }) {
  

  const [description, setDescription] = useState(false)
  const desClickHandler = (e) => {e.preventDefault(); setDescription(true) }
  // favClickHandler
   
  {}
    return (
      <div>
        <img src={data.image_url} />
        <button onClick={desClickHandler}>Description</button>
        {description ? <PlantDescription data={data}/> : null}
        <h4>
          "{data.latin_name}" or {data.plant_name}
        </h4>
        <p>Price: ${data.price}</p>
        {/* <button onClick={favClickHandler}> Favorite</button> */}
        {/* <p>{data.description}</p> */}
        {/* <p>
          Dimensions: {datn Plant.dimensions.width} in. x {datn Plant.dimensions.height} in.
        </p> */}
      </div>
        
    );
  };

  export default Plant;