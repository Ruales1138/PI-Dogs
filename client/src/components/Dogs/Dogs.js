import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, alphabeticalOrder, weightOrder } from "../../redux/actions";
import { Link } from "react-router-dom";
import DogCard from "../DogCard/DogCard";
import SearchBar from "../SearchBar/SearchBar";

function Dogs() {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('');
    const lastDog = currentPage * 8;
    const fistDog = lastDog - 8;
    const currentDogs = dogs.slice(fistDog, lastDog);
    const totalPages = Math.ceil(dogs.length/8);

    useEffect(()=>{
        dispatch(getAllDogs())
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

    return (
        <div>
            <SearchBar/>
            <button>Filter</button>
            <p>Sort by: </p>
            <select onChange={e => handleOrder(e)}>
                <option value={'A-Z'}>Alphabetical order A-Z</option>
                <option value={'Z-A'}>Alphabetical order Z-A</option>
                <option value={'MaxToMin'}>Weight from highest to lowest</option>
                <option value={'MinToMax'}>Weight from smallest to largest</option>
            </select>
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