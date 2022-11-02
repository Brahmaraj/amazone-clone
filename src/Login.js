import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "./Login.css";
import { auth } from "./firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const signIn = e => {
    // e.prevetDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      console.log(auth)
      navigate("/");
    })
    .catch(err=>alert(err.message))
    return false;
    //firebas login key
  }

  const register = e => {
    // e.prevetDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
      console.log(auth);
      if(auth){
        navigate('/');
      }
    })
    .catch(err=>alert(err.message))
    return false;
    //firebas login key
  }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>
            <div>
              <h5>E-mail</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

              <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </div>

            <p>
              By signing-in you agree to fake amazon coditions
            </p>

            <button className='login__registerButton'  onClick={register}>Create your Amazon Accout</button>
        </div>

    </div>
  )
}

export default Login