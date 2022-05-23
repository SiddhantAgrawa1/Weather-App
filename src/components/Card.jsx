import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Card = (props) => {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    console.log("props",props)
    return (
       

        <div className="row d-flex justify-content-center align-items-center my-3">
        <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card" style={{color: "#4B515D", borderRadius: "35px"}}>
          <div className="card-body p-4">

            <div className="d-flex">
              <h6 className="flex-grow-1">{props.data.name}</h6>
              <h6>{hr}:{min}</h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {props.data.main.temp} <sup>o</sup>C </h6>
              <span className="small" style={{color: "#868B94"}}>{props.data.weather[0].description}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{fontSize: "1rem"}}>
                <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.data.wind.speed} km/h
                  </span></div>
                <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.data.main.humidity} % </span>
                </div>
                <div><i className="fas fa-sun fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.data.main.pressure} Pa </span>
                </div>
              </div>
              <div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                  width="100px" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  
    )
}

export default Card;