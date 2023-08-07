import React, { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {signIn}= useContext(AuthContext)
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/';


    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin =event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result=>{
          const user = result.user;
          console.log(user)
          Swal.fire({
            title: 'Login Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from,{replace:true})
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    const handleValidateCaptcha = (e) =>{
      const user_captcha_value = e.target.value;
     if(validateCaptcha(user_captcha_value)){
       setDisabled(false)
     }else{
        setDisabled(true)
     }
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
              </div>
              {/* TODO: disabled captcha for development purpose */}
              <div className="form-control mt-6">
                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
            <div className="text-center mb-5">
              <small>New Here ? <Link to='/signup' className="text-orange-600 link-hover">create an account</Link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;