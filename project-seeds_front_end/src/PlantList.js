import Plant from './Plant';
import { Link } from 'react-router-dom';

function PlantList(props) {


  return (
    <div>
      <Link to="/"> Home </Link>
      <h1>Plants</h1>
      <h3> Favorites</h3>
      {/* {description ? <PlantDescription data={data}/> : null} */}
      {
      props.data.map(data => (
        <Plant
          data={data}
        />
      ))
      }
    </div>
  );
};

export default PlantList;