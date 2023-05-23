import { Link } from "react-router-dom";


const Toy = ({toy}) => {
    const {photoUrl,name, price, rating,_id }= toy;
    return (
        <div>
  <div className="card w-96 h-96 bg-base-100 shadow-xl ">
  <figure><img src={photoUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Toy Name: {name}
    </h2>
    <p>Price: {price}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions justify-end">

    <Link to={`/toy/${_id}`}> <button className="btn btn-ghost btn-xs">details</button></Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Toy;