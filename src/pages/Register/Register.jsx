import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            updateProfile(user, {
                displayName: name, photoURL: photo
              })
              .then(() => {
                alert('registation completed')
             })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        
        <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo url</span>
          </label>
          <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        </form>

        <Link to='/login'><p>Already have an account? <span className="text-orange-500">please login</span> </p></Link>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Register;