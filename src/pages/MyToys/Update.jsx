
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const toyinfo = useLoaderData()
    console.log(toyinfo)

    const {_id, price, quantity,details} = toyinfo;
    
    const handleUpdateToy = event =>{
        event.preventDefault();
        const form = event.target;
        const price= form.price.value;
       
        const quantity = form.quantity.value;
        const details = form.details.value;


        const updateToy = {
            price,
            quantity,
            details
        } 
        
        fetch(`https://toys-home-server.vercel.app/toys/${_id}`, {
            method:'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success',
                    text: 'toy Update succecfully',
                    icon: 'success',
                    showConfirmButton: 'ok'
                  })
            }
        })


    }
    return (
        <div>
            <h3 className="text-bold text-4xl text-green-500 text-center"> you can Update the toy name price & details</h3>
        <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" defaultValue={price} className="input input-bordered" />
            </div>
            

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available quantity</span>
                </label>
                <input type="text" name="quantity" defaultValue={quantity}  placeholder="quantity" className="input input-bordered" />
                {/* defaultValue={user?.email} */}
            </div>
            
        </div>
        <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail description</span>
                </label>
                <input type="text" name='details' defaultValue={details}  className="input input-bordered h-20" />
            </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary btn-block mb-4" type="submit" value="Update the Toy" />
        </div>
    </form>
    </div>
    );
};

export default Update;