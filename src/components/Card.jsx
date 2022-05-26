import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Card.css'

const Card = (props) => {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let tc = 'AM' ;
    if (hr > 12){
      hr = hr - 12;
      tc = 'PM';
    }
    return (
       

        <div className="row d-flex justify-content-center align-items-center my-3" >
          <img className="col-md-8 col-lg-6 col-xl-4" id='imgs' src={require('./img/3324647.jpg')}  alt='Vector Img' ></img>
        <div className="col-md-8 col-lg-6 col-xl-4"  style={{flexDirection:'row'}}>

        <div className="card" style={{color: "#4B515D",  borderRadius: '0 40px 40px 0',height:'20.25rem'}}>
          <div className="card-body p-4" >

            <div className="d-flex">
              <h5 className="flex-grow-1">{props.data.name}</h5>
              <h5 >{hr} : {min} <span style={{fontSize:'17px'}}>{tc}</span></h5>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {props.data.main.temp} <sup>o</sup>C </h6>
              <span className="small" style={{color: "#868B94"}}>{props.data.weather[0].description}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{fontSize: "1rem",marginTop:'-35px'}}>
                <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.data.wind.speed} km/h
                  </span></div>
                <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.data.main.humidity} % </span>
                </div>
                <div><i className="fas fa-sun fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.data.main.pressure} Pa </span>
                </div>
              </div>
              <div style={{marginTop:'-30px'}}>
                <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                  width="150px" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  
    )
}

export default Card;