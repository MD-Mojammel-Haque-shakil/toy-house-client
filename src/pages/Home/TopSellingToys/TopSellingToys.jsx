

const TopSellingToys = () => {
    return (
        <div>
        <h3 className="text-bold text-3xl text-center text-purple-500 my-6">OUR NEW TOY COLLECTIONS</h3>
       <div className="grid lg:grid-cols-3 gap-4">
       <div className="card w-96 h-96 bg-base-100 shadow-xl">
         <figure><img src="https://m.media-amazon.com/images/I/41Z9zG91IGL._AC_SR320,320_.jpg" alt="Shoes" /></figure>
       <div className="card-body">
    <h2 className="card-title">Name: 30416 Special Police car</h2>
    <p>Price: $12</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 h-96 shadow-xl">
         <figure><img src="https://m.media-amazon.com/images/I/71wR0hBnFVL._AC_UL320_.jpg" alt="Shoes" /></figure>
       <div className="card-body">
    <h3 className="card-title">Name: 30416 Special Police car</h3>
    <p>Price: $12</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 h-96 shadow-xl">
         <figure><img src="https://s.alicdn.com/@sc04/kf/He98bfd3d04694ef39bc7f081186554833.png_300x300.png" alt="Shoes" /></figure>
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

export default TopSellingToys;