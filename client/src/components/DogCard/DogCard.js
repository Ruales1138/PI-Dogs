import React from "react";
import { Link } from 'react-router-dom';
import style from './DogCard.module.css';

function DogCard(props) {
    return (
        <div className={style.container}>
            <h1>{props.name}</h1>
            <div>
                <img src={props.image} width="300" height="200" alt=''/>
            </div>
            <div>
                <h4>Temperament:</h4>
                <p>{props.temperament}</p>
            </div>
            <div>
                <h4>Weight:</h4>
                <p>{props.weight} kg</p>
            </div>
            <Link className={style.link} to={`/dogs/${props.id}`}>More info</Link>
        </div>
    )
};

export default DogCard;