import { useLoaderData } from "react-router-dom";


const DetailsCard = () => {
    const data = useLoaderData()
    console.log(data)
    const {photoUrl,name, sellerName, rating, price, quantity,sellerEmail,details}= data;

    return (
<div className="card w-2/4 mx-auto bg-base-100 shadow-xl my-10">
  <h3 className="text-3xl text-center">Car Details Here</h3>
  <figure><img src={photoUrl}  alt="Shoes" /></figure>
  <div className="card-body  bg-orange-200">
    <h2 className="card-title">Car Name: {name}</h2>
    <h2>Seller Name: {sellerName}</h2>
    <h2>Seller Email: {sellerEmail}</h2>
    <p>Price: {price}</p>
    <p>Rating: {rating}</p>
     <p>Availeable Quantity: {quantity}</p>
    <p>car Details: {details}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default DetailsCard;