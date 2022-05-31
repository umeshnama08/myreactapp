import React, { useState } from "react";

const Card = props => {
    return (
      

      <div className="card" style={{width: "18rem"}}>
            <img src={props.avatar_url} className="card-img-top"  style={{width: "50%",height:"50%"}} />
            <div className="card-body">  
                <p className="card-text">{props.name}</p>
            </div>
         </div>
    )
  }

  export default Card