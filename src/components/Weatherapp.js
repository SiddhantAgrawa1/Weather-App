import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

const Weatherapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    if (search === '' ){
        setSearch('Mumbai')
    }
    useEffect(() => {
        const FetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4deb98116687d62be2a88a39dd42334b`;
            const response = await fetch(url);
            const data = await response.json();
            setCity(data)
        }   
        FetchApi()
},[search])
    
    return (
        <div className="vh-100" >
            <div className="container py-5 h-100" >
                <div  className="row d-flex justify-content-center align-items-center h-10">
                    <input id='inputField' className="col-md-7 col-lg-6 col-xl-4" type="search" placeholder="Mumbai" onChange={(event) => {setSearch(event.target.value)}}></input>
                </div>
                 
                { (!city || city.cod === '404') ? <p className="row d-flex justify-content-center align-items-center h-10" id='para'> No data Found</p> : 
                    (
                       <Card data={city}/>
                    )
                }
            </div>
            <h3 style={{color:'whitesmoke',marginTop:'-60px',textAlign:'right',fontFamily:'cursive',marginRight:'20px'}}>Devloped with <span role="img" aria-label="sheep">❤️</span> by Sid</h3>
        </div>
    )
}

export default Weatherapp;