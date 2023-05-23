import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddAtoy = () => {
  const {user} =useContext(AuthContext)
    const handleAddAToy = event =>{
        event.preventDefault();
        const form = event.target;
        const photoUrl = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellername.value;
        const sellerEmail = form.selleremail.value;
        const toyCategory = form.toycategory.value;
        const price= form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;


        const newToy = {
            photoUrl,
            name,
            sellerName,
            sellerEmail,
            toyCategory,
            price,
            rating,
            quantity,
            details
        } 
        
        fetch('https://toys-home-server.vercel.app/toysinfo', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'toy added succecfully',
                    icon: 'success',
                    showConfirmButton: 'ok'
                  })
            }
        })


    }
    return (
        <div>
            <form onSubmit={handleAddAToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture URL</span>
                    </label>
                    <input type="text"  name="photo" className="input input-bordered" />
                    {/* defaultValue={user?.displayName}  */}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name="sellername" defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" name="selleremail" defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Category</span>
                    </label>
                    <input type="text" name="toycategory" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">rating</span>
                    </label>
                    <input type="text" name="rating" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="text" name="quantity"  placeholder="email" className="input input-bordered" />
                    {/* defaultValue={user?.email} */}
                </div>
                
            </div>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name='details'  className="input input-bordered h-20" />
                </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Add A New Toy" />
            </div>
        </form>
        </div>
    );
};

export default AddAtoy;