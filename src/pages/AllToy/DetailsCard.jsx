import { useLoaderData } from "react-router-dom";


const DetailsCard = () => {
    const data = useLoaderData()
    console.log(data)
    const {photoUrl,name, sellerName, rating, price, quantity,sellerEmail,details}= data;

    return (
<div className="card w-2/4 mx-auto bg-base-100 shadow-xl my-10">
  <figure><img src={photoUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2>{sellerName}</h2>
    <h2>{sellerEmail}</h2>
    <p>{price}</p>
    <p>{rating}</p>
     <p>{quantity}</p>
    <p>{details}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default DetailsCard;