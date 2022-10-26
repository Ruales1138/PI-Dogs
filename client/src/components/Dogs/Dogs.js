import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import DogCard from "../DogCard/DogCard";
import SearchBar from "../SearchBar/SearchBar";
import { getAllDogs, getAllTemps, alphabeticalOrder, weightOrder, temperamentFilter, originFilter } 
from "../../redux/actions";

function Dogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('');
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const temps = useSelector(state => state.temps);
    const lastDog = currentPage * 8;
    const fistDog = lastDog - 8;
    const currentDogs = dogs.slice(fistDog, lastDog);
    const totalPages = Math.ceil(dogs.length/8);

    useEffect(()=>{
        dispatch(getAllDogs());
        dispatch(getAllTemps());
    }, [dispatch]);

    function scrollToTop() {
        window.scrollTo({
          top: 0, 
          behavior: 'auto'
        });
      };

    function nextPage() {
        scrollToTop();
        setCurrentPage(currentPage + 1);
    };

    function prevPage() {
        scrollToTop();
        setCurrentPage(currentPage - 1);
    };

    function handleOrder(e) {
        let value = e.target.value;
        if(value === 'A-Z' || value === 'Z-A') {
            dispatch(alphabeticalOrder(value));
            setOrder(value);
            setCurrentPage(1);
        } else {
            dispatch(weightOrder(value));
            setOrder(value);
            setCurrentPage(1);
        }
    };

    function handleTemperaments(e) {
        dispatch(temperamentFilter(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    };

    function handleOrigin(e) {
        dispatch(originFilter(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div>
            <button onClick={() => console.log(dogs[0])}>Prueva</button>
            <SearchBar/>
            <div>
                <h4>Filter by: </h4>
                <p>Temperament: </p>
                <select onChange={e => handleTemperaments(e)}>
                    <option value={'All'}>All</option>
                    {temps.length > 0 && 
                    temps.map(e => (
                        <option key={e.id} value={e.name}>{e.name}</option>
                    ))}
                </select>
                <p>Origin: </p>
                <select onChange={e => handleOrigin(e)}>
                    <option value={'API'}>From API</option>
                    <option value={'DB'}>From DB</option>
                </select>
            </div>
            <div>
                <h4>Sort by: </h4>
                <select onChange={e => handleOrder(e)}>
                    <option value={'A-Z'}>Alphabetical order A-Z</option>
                    <option value={'Z-A'}>Alphabetical order Z-A</option>
                    <option value={'MaxToMin'}>Weight from highest to lowest</option>
                    <option value={'MinToMax'}>Weight from smallest to largest</option>
                </select>
            </div>
            <Link to='/create'>Create dog</Link>
            {currentDogs.length? (
                currentDogs.map(e => {
                    return(
                        <DogCard
                            id={e.id}
                            key={e.id}
                            name={e.name}
                            temperament={e.temperament}
                            weight={e.weight}
                            image={e.image}
                        />
                    )
                })
            ) : (<p>Loading...</p>)}

            {currentDogs.length? (
            <div>
                <button disabled={currentPage === 1? true : false} onClick={prevPage}>{'< Prev'}</button>
                <p>{currentPage} of {totalPages}</p>
                <button disabled={currentPage === totalPages? true : false} onClick={nextPage}>{'Next >'}</button>
            </div>
            ) : (<p></p>)}
            
        </div>
    )
};
 export default Dogs;