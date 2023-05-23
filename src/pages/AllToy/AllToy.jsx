import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";


const AllToy = () => {
    const [allToys, setToys] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data=>setToys(data))
       }, [])
console.log(allToys)
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {
        allToys.map(singleToy=> <SingleToy 
            key={singleToy._id} singleToy={singleToy}
            ></SingleToy>)
      }
    </tbody>


    
  </table>
</div>
        </div>
    );
};

export default AllToy;