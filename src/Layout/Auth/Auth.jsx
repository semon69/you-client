import React from 'react';
import "./Auth.css";
import logo from "/img/logo.png"
import "../../App.css"
import Lottie from "lottie-react";
import login from "../../../public/LottieFiles/login.json"

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <Lottie animationData={login}></Lottie>
      </div>

      <div className='a-right'>
        <SignUp></SignUp>
      </div>
    </div>
  );
};
function LogIn() {
  return (
    <div className="w-4/5">
      <form className="px-4 py-10 space-y-3 shadow-lg infoForm authForm">
        <div className='flex gap-3'>
          <img className='w-12 h-12 mr-1 rounded-full' src={logo} alt="" />
          <h3 className='text-xl font-bold'>Log In</h3>
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className=" infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className='text-center'>
          <span style={{ fontSize: "16px" }} className='hover:underline'>
            Don't have an account Sign up
          </span>
          <button className="btn-primary text-violet-800 ms-3" type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div className="w-4/5">
      <form className="px-4 py-10 space-y-4 shadow-xl infoForm authForm">
        <div className='flex gap-3'>
          <img className='w-12 h-12 mr-1 rounded-full' src={logo} alt="" />
          <h3 className='text-xl font-bold'>Sign Up</h3>
        </div>

        <div className='flex gap-2'>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div className='flex gap-2'>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div className='text-center'>
          <span style={{ fontSize: '12px' }} className='hover:underline'>Already have an account. Login!</span>
          <button className="btn-primary text-violet-800 ms-3" type="submit">Signup</button>
        </div>
        
      </form>
    </div>
  );
}


export default Auth;