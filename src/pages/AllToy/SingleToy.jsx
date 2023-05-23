import { Link } from "react-router-dom";


const SingleToy = ({singleToy}) => {
    const {name,sellerName, toyCategory,price, quantity, _id } = singleToy;
    return (
         
             
             <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">{sellerName}</div>

            </div>
          </div>
        </td>
        <td>
          {name}
        </td>
        <td>{toyCategory}</td>
        <td>{price}</td>
         <td>{quantity}</td>
         <th>
        <Link to={`/toy/${_id}`}> <button className="btn btn-ghost btn-xs">details</button></Link> 
        </th>
      </tr>

    );
};

export default SingleToy;