

const Banner3 = () => {
    return (
        <div className="mb-8">
        <h3 className="text-bold text-3xl text-center text-purple-500 my-6">TOP SELLING CAR</h3>
       <div className="grid lg:grid-cols-3 gap-4">
       <div className="card w-96 h-96 bg-base-100 shadow-xl">
         <figure><img src="https://m.media-amazon.com/images/I/71geWBM2XwL._AC_UL320_.jpg" alt="Shoes" /></figure>
       <div className="card-body">
    <h2 className="card-title">Name: 30416 Special Police car</h2>
    <p>Price: $12</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 h-96 shadow-xl">
         <figure><img src="https://m.media-amazon.com/images/I/71-JsX3z7DL._AC_UL320_.jpg" alt="Shoes" /></figure>
       <div className="card-body">
    <h3 className="card-title">Name: 30416 Special Police car</h3>
    <p>Price: $12</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 h-96 shadow-xl">
         <figure><img src="https://m.media-amazon.com/images/I/81SbAc7k4kL._AC_UL320_.jpg" alt="Shoes" /></figure>
       <div className="card-body mt-0">
    <h2 className="card-title">Name: 30416 Special Police car</h2>
    <p>Price: $12</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

       </div>
        </div>
    );
};

export default Banner3;