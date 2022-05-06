import {Link} from 'react-router-dom';
import './style.css';
import React, { useState } from "react"
import { useEffect } from 'react'
import Card from "./Card";
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr=["Featured","Theatre","Kids","Drama","Comedy"];
const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

    const getData=(movieType)=>{
        if(movieType==="Featured")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Theatre")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType==="Kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType==="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType==="Comedy")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);

    }
    const searchMovie=(evt)=>{
        if(evt.key==="Enter")
        {
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return(
        <div className='bg-dark'>
            <div className="header bg border-b fixed-top" >
            <img className='header-logo ' src='https://static.cdnlogo.com/logos/n/4/netflix.svg' alt='NETFLIX'></img>
                <nav >
                    <ul>
                        {
                            arr.map((value,pos)=>{
                                return(
                                    <li><button className='p-3' key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</button></li>
                                )
                            })
                        }
                       
                    </ul>
                   
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" 
                        className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                        value={search} onKeyPress={searchMovie}>
                        </input>
                        <button className='btn btn-danger'>Search</button>
                    </div>
                </form>
                <Link className="text-decoration-none text-light btn" to="/" style={{backgroundColor:"red"}}><button className='btn btn-color text-light' >  LOGOUT </button></Link>
            </div>
            <div className="container " style={{paddingTop:'120px'}}>
                {
                    (movieData.length===0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}
export default Main;
