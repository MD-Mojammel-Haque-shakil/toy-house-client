

const Toy = ({toy}) => {
    const {photoUrl,name, price, rating }= toy;
    return (
        <div>
                           <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={photoUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Toy Name: {name}
    </h2>
    <p>Price: {price}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions justify-end">

      <div className="badge badge-outline">Details</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Toy;