
import Swal from "sweetalert2";



const ToyRow = ({myToy}) => {
  


    const {_id, name,sellerName, toyCategory,price, quantity,  } = myToy;
    const handleDelete=_id=>{
       console.log(_id)
       Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this item?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        
          const url =`http://localhost:5000/mytoys/${_id}`
          fetch(url,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deleteCount > 0){
              Swal.fire(
                'Deleted!',
                'Your toy item has been deleted.',
                'success'
              )
            }
          })
        }
      })
    }
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
         <button className="btn btn-ghost btn-xs">update</button>
        <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default ToyRow;