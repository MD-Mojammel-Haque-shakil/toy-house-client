import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import Toy from "./Toy";

const ShopByCate = () => {
  const [select, setSelect]= useState('sports')
  const [toys, setToys] = useState([]);
  console.log(toys)

 
  useEffect(()=>{
    fetch(`https://toys-home-server.vercel.app/toys/?tab=${select}`)
        .then(res => res.json())
        .then(data=>setToys(data))
  }, [select])
  return (
    <div className="">
      <h3 className="text-purple-500 text-3xl text-center mt-8">Shop By CateGory</h3>
      <div className="btn- my-4 lg:mx-96">
        <button onClick={()=>setSelect('sport')} className="btn btn-active sm:ms-4  lg:me-12">Sports car</button>
        <button onClick={()=>setSelect('police')} className="btn btn-warning  lg:me-12">Police car</button>
        <button onClick={()=>setSelect('truck')} className="btn btn-success lg:me-12">Fire Truck</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 mx-auto w-full">
        {
          toys.map(toy=> <Toy key={toy._id} toy={toy}>
             

          </Toy>)
        }
      </div>
    </div>
  );
};

export default ShopByCate;
