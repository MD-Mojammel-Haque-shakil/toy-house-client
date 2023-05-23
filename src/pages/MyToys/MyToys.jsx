import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyRow from "./ToyRow";


const MyToys = () => {
     const [myToys, setToys] = useState([])
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/mytoys?email=${user.email}`
   useEffect(()=>{
    fetch(url, {method: "GET"})
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        setToys(data)
    })
   }, [url])
console.log(myToys)
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
        <th>Quantity</th>
        <th>update</th>
       
      </tr>
    </thead>
    <tbody>
    {
        myToys.map(myToy=> <ToyRow 
            key={myToy._id} myToy={myToy}
            ></ToyRow>)
      }
    </tbody>


    
  </table>
</div>
        </div>
    );
};

export default MyToys;