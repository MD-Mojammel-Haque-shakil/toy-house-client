import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import Toy from "./Toy";

const ShopByCate = () => {
  const [select, setSelect]= useState('sports')
  const [toys, setToys] = useState([]);
  console.log(toys)

 console.log(name)
  useEffect(()=>{
    fetch(`http://localhost:5000/toys/?tab=${select}`)
        .then(res => res.json())
        .then(data=>setToys(data))
  }, [select])
  return (
    <div>
      <div className="btn-group my-4 mx-auto">
        <button onClick={()=>setSelect('sport')} className="btn btn-active">Sports car</button>
        <button onClick={()=>setSelect('police')} className="btn">Police car</button>
        <button onClick={()=>setSelect('truck')} className="btn">Truck</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 mx-auto">
        {
          toys.map(toy=> <Toy key={toy._id} toy={toy}>
             

          </Toy>)
        }
      </div>
    </div>
  );
};

export default ShopByCate;
