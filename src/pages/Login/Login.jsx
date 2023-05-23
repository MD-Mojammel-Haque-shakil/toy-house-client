
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/"

  const handleSignIn = event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      form.reset()
      navigate(from, {replace : true})
    })
  .catch(error=>{
      console.log(error)
    })
  }

  const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin =()=>{
          signInWithPopup(auth, googleProvider)

          .then(result=>{
            const user =result.user;
            console.log(user);
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
       
         <form onSubmit={handleSignIn}>
         <div className="form-control">
         <h3 className="text-red-400 text-3xl fond-bold">please log in </h3>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleLogin} className='btn btn-primary mt-2'>Login with Google</button>
           
        </div>
         </form>

        <Link to='/signup'><p>are you new here? <span className="text-orange-500">please sign up</span> </p></Link>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;