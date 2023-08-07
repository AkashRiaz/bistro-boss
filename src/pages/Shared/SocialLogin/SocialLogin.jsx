import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import {useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../../providers/AuthProviders";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)

          const savedUser = {name: loggedUser.displayName, email:loggedUser.email}

          fetch(`http://localhost:5000/users`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(savedUser)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            navigate(from, {replace:true})
          }
        })


          
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  return (
    <div>
      <div className="divider"></div>
     <div className="text-center">
     <button onClick={handleGoogleSignIn}  className="btn  btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
     </div>
    </div>
  );
};

export default SocialLogin;
