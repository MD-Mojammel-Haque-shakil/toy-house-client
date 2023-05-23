// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
}
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><Link> All Toys</Link></li>
      <li><a>My Toys</a></li>
     
      <li><Link to='/addatoy'>Add A Toy</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
      </ul>
    </div>
    <div className="w-20 rounded-full">
          <img src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?w=740&t=st=1684593385~exp=1684593985~hmac=d937652ec42c511d67c7945c7527a4bfa83cab23f5c2c890ee20c49f74d03bab" />
        </div>
    <a className="btn btn-ghost normal-case text-2xl">BABY TOY HOUSE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/alltoys'> All Toys</Link></li>
      <li><Link to='/mytoys'>My Toys</Link></li>
     
      <li><Link to='/addatoy'>Add A Toy</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <>
           <img title={user.displayName} style = {{width:40, height:40}} src={user.photoURL} alt="" />
          <button onClick={handleLogOut} className="btn" type="submit">log out</button>
           </> :
    <Link to='/login' className="btn">log in</Link>
    
    }
    
  </div>
</div>
    );
};

export default Header;