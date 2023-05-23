import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import swal from "sweetalert";


const Toy = ({toy}) => {
  const {user} = useContext(AuthContext)
  const handleAlert= ()=>{
    if(!user){
      swal('You have to log in first to view details')
    }
  }
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

    <Link to={`/toy/${_id}`}> <button onClick={handleAlert} className="btn btn-ghost btn-xs">details</button></Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Toy;