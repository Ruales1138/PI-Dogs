import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DogCard from "../DogCard/DogCard";
import { getAllDogs } from "../../redux/actions";

function Dogs() {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);

    useEffect(()=>{
        dispatch(getAllDogs())
    }, []);

    return (
        <div>
            <input/>
            <button>Search</button>
            <button>Filter</button>
            {dogs.map(e => {
                return(
                    <DogCard
                        name={e.name}
                        temperament={e.temperament}
                        weight={e.weight}
                        img={e.image}
                    />
                )
            })}
        </div>
    )
};
 export default Dogs;