import React  from "react";
import './HomePage.css';
import { useEffect } from 'react'
import {Link} from 'react-router-dom';


const Login = () => {

  (function () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://pngshare.com/wp-content/uploads/2021/06/Netflix-Logo-Wallpaper-4.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();

  useEffect(() => {
    document.title = "Netflix PH - Sign In"
  }, [])

  return (

    <div className='d-flex flex-wrap main-login-container flex-column'> {/* main div */}
    <div className='d-flex' style={{width:'100%'}}> {/*  content - one */}
        <div className='container-contentLogin'>
                <img className='container-bg img-fluid' src='https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/267f1d74-e1d5-4dd4-919a-b2643b0251d0/PH-en-20220425-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt=''></img>
        </div>
        {/* logo and login */}
        <div className='header-wrapper'>
        <div className='d-flex flex-wrap justify-content-between header'>

<img className='header-logo ' src='https://static.cdnlogo.com/logos/n/4/netflix.svg' alt='NETFLIX'></img>

{/* link / a */}
<Link className="text-decoration-none text-light btn" to="/" style={{backgroundColor:"red"}}><button className='btn btn-color text-light' >  Home </button></Link>
</div>
            <div className="d-flex justify-content-center">
              
            <div className='d-flex p-relative content-login '>

            <div class="card bg-warning text-dark mb-4">
              <div class="card-body">No LOGIN credential needed. Just click <strong>Sign In.</strong></div> {/* LOGIN CREDENTIALS */}
            </div>

              <div className="d-flex flex-wrap pb-4">
                <h1 className='text-light login-title '>Sign In</h1>
              </div>
              <form className='form'>
                  <div className="input-group align-items-center mb-4">  
                      <input id="username" className='email-input' type="text" class="form-control" placeholder="Username" aria-label="" aria-describedby="basic-addon1" style={{height:'60px'}}></input>
                  </div>
                  <div className="input-group align-items-center mb-4">  
                      <input id="password" className='email-input' type="password" class="form-control" placeholder="Password" aria-label="" aria-describedby="basic-addon1" style={{height:'60px'}}></input>
                  </div>
                  <div className="input-group align-items-center ">  
                  <Link className="text-decoration-none text-light btn" to="/dashboard" style={{backgroundColor:"red", width:'100%'}}><button className='btn btn-color text-light' >  Sign In </button></Link>
                  </div>
              </form>
              </div>
              </div>
            </div>
        </div>
        </div>

  )
}

export default Login;