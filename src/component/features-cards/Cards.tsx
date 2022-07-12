import React from "react";
import './Cards.css'
import {dataModelFeat} from '../../model'

// export default function Cards(props) {

export default function Cards(props:dataModelFeat){
  return (
    <div className="card">
      <div className="card__body">
          <img className="card__image" src={props.img} alt="" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}

