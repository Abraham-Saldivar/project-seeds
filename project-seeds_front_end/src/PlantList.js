import Plant from './Plant';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Favorites from './Favorites'




function PlantList(plantData) {




  

  const [favList, setFavList] = useState(false)

  const openList = (e) => {e.preventDefault(); setFavList(!favList) }
  return (
    <div id="plant-list-color">
      <div id="home-link">
      <Link id="word-link"to="/"> Home </Link>
      </div>
      <h1 id="change">The change starts with you.</h1>
      <div>
      <h3 id="my-fav" onClick={openList}> Favorites</h3>
      {favList ? <Favorites plantData={plantData}/> : null}
      </div>
      <div id="plant-grid">
      {plantData.data.map(data => ( <Plant data={data} key={data.id}/>))}</div>
      </div>
  );
};

export default PlantList;