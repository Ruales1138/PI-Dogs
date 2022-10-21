import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import SearchBar from "../SearchBar/SearchBar";

function Dogs() {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const [currentPage, setCurrentPage] = useState(1);
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

    return (
        <div>
            <SearchBar/>
            <button>Filter</button>
            {currentDogs.length? (
                currentDogs.map(e => {
                    return(
                        <DogCard
                            key={e.id}
                            name={e.name}
                            temperament={e.temperament}
                            weight={e.weight}
                            img={e.image}
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