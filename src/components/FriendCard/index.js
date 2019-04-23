import React from "react";
import "./style.css";


function FriendCard(props) {
  return (
        <div className="card">
        <div className="img-container" dataid={props.id} onClick={() => props.randomRender(props.id)}>
            <img alt={props.name} src={props.image} />
        </div>
        </div>
    
  )}

export default FriendCard;