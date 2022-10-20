import React from "react";

function DogCard(props) {
    return (
        <div>
            <hr/>
            <h1>{props.name}</h1>
            <div>
                <h4>Temperament:</h4>
                <p>{props.temperament}</p>
            </div>
            <div>
                <h4>Weight:</h4>
                <p>{props.weight} kg</p>
            </div>
            <div>
                <img src={props.img} width="300" height="200" alt=''/>
            </div>
            <hr/>
        </div>
    )
};

export default DogCard;