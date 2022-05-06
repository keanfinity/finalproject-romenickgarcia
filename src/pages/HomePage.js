import React from "react";
import './HomePage.css';
import {Link} from 'react-router-dom';
import { useEffect } from 'react'



const HomePage = () => {

    (function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://pngshare.com/wp-content/uploads/2021/06/Netflix-Logo-Wallpaper-4.png';
        document.getElementsByTagName('head')[0].appendChild(link);
      })();
      
      useEffect(() => {
        document.title = "Netflix PH - Romenick B. Garcia"
      }, [])

      return(
  <div className='d-flex flex-wrap main-container flex-column'> {/* main div */}
    <div className='d-flex border-b' style={{width:'100%'}}> {/*  content - one */}
        <div className='container-content1'>
                <img className='container-bg img-fluid' src='https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/267f1d74-e1d5-4dd4-919a-b2643b0251d0/PH-en-20220425-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt=''></img>
        </div>
        {/* logo and login */}
        <div className='header-wrapper'>
            <div className='d-flex flex-wrap justify-content-between header'>

                <img className='header-logo ' src='https://static.cdnlogo.com/logos/n/4/netflix.svg' alt='NETFLIX'></img>
                
                {/* link / a */}
                <Link className="text-decoration-none text-light btn" to="/login" style={{backgroundColor:"red"}}><button className='btn btn-color text-light' >  Sign In </button></Link>
            </div>
            <div className='d-flex flex-wrap p-relative content1-story-wrapper'>
                <h1 className='text-light title '>Unlimited movies, TV shows, and more.</h1>
                <h2 className='text-light subtitle '>Watch anywhere. Cancel anytime.</h2>
                <form className='form p-4 email-group'>
                    <h3 className='text-light email-title pb-2 '>Ready to watch? Enter your email to create or restart your membership.</h3>
                    
                    <div className="input-group align-items-center">  
                        <input className='email-input' type="text" class="form-control" placeholder="Email Address" aria-label="" aria-describedby="basic-addon1" style={{height:'70px'}}></input>
                        <div class="input-group-prepend">
                        <button href='/signIn' className='btn btn-color email-button ' style={{backgroundColor:"red", color:'white'}}>Get Started</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>

    </div>{/* content - one */}
    <div className='d-flex flex-wrap justify-content-center border-b' style={{width:'100%', height:'auto'}}> {/*  content - two */}
        <div className='container-content2  d-flex flex-wrap flex-row'>
            <div className=' content2-story-wrapper row d-flex flex-wrap'>
                <div className='container-fluid row' style={{margin:'50px'}}>
                    <div className='col-lg-6 p-4'>
                        <h1 className='text-light title2 pb-2'>Enjoy on your TV.</h1>
                        <h3 className='text-light subtitle2 pb-2'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                    </div>
                    <div className='col-lg-6 p-4 d-flex justify-content-center' >
                        <video autoPlay loop muted>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                        </video>
                    </div>
                    </div>
            </div>
        </div>
    </div>{/* content - two */}
    <div className='d-flex flex-wrap justify-content-center border-b' style={{width:'100%', height:'auto'}}> {/*  content - two */}
        <div className='container-content2a  d-flex flex-wrap flex-row'>
            <div className=' content2-story-wrapper row d-flex flex-wrap'>
                <div className='container-fluid row' style={{margin:'50px'}}>
                    <div className='col-lg-6 p-4 d-flex justify-content-center' >
                            <img className='img-fluid img-content' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=''/>
                    </div>
                    <div className='col-lg-6 p-4'>
                        <h1 className='text-light title2 pb-2'>Download your shows to watch offline.</h1>
                        <h3 className='text-light subtitle2 pb-2'>Save your favorites easily and always have something to watch.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>{/* content - two */}
    <div className='d-flex flex-wrap justify-content-center border-b' style={{width:'100%', height:'auto'}}> {/*  content - three */}
        <div className='container-content2  d-flex flex-wrap flex-row'>
            <div className=' content2-story-wrapper row d-flex flex-wrap'>
                <div className='container-fluid row' style={{margin:'50px'}}>
                    <div className='col-lg-6 p-4 d-flex justify-content-center flex-column' >
                        <h1 className='text-light title2 pb-2'>Watch everywhere.</h1>
                        <h3 className='text-light subtitle2 pb-2'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                    </div>
                    <div className='col-lg-6 p-4'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>{/* content - three */}
    <div className='d-flex flex-wrap justify-content-center border-b' style={{width:'100%', height:'auto'}}> {/*  content - four */}
        <div className='container-content2a  d-flex flex-wrap flex-row'>
            <div className=' content2-story-wrapper row d-flex flex-wrap'>
                <div className='container-fluid row' style={{margin:'50px'}}>
                    <div className='col-lg-6 p-4 d-flex justify-content-center' >
                            <img className='img-fluid img-content' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" alt=''/>
                    </div>
                    <div className='col-lg-6 p-4'>
                        <h1 className='text-light title2 pb-2'>Create profiles for kids.</h1>
                        <h3 className='text-light subtitle2 pb-2'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>{/* content - four */}
    <div className='d-flex flex-wrap justify-content-center' style={{width:'100%', height:'auto'}}> {/*  content - four */}
        <div className=' d-flex flex-wrap flex-row'>
            <div className=' content1a-story-wrapper row d-flex flex-wrap justify-content-center'>
                <div className='container d-flex'>
                <h1 className='text-light title2 pb-2 mb-5'>Frequently Asked Questions</h1>
                </div>
                <div className='d-flex flex-wrap p-relative content1-story-wrapper'>
                        <form className='form p-4 email-group'>
                            <h3 className='text-light email-title pb-2'>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="input-group align-items-center">  
                                <input className='email-input' type="text" class="form-control" placeholder="Email Address" aria-label="" aria-describedby="basic-addon1" style={{height:'70px'}}></input>
                                <div class="input-group-prepend">
                                <button href='/signIn' className='btn btn-color email-button ' style={{backgroundColor:"red", color:'white'}}>Get Started </button>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>{/* content - four */}
    
</div> /* main div */
);

    }

export default HomePage;