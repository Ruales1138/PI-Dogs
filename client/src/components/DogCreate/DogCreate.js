import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemps, getAllDogs, createDog } from '../../redux/actions';
import style from './DogCreate.module.css'

function DogCreate() {
    const dispatch = useDispatch();
    const temps = useSelector(state => state.temps);
    const dogs = useSelector(state => state.dogs);
    const dogsNames = dogs.map(e => e.name);
    const [tempsSelected, setTempsSelected] = useState([]);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [newDog, setNewDog] = useState({
        name: '',
        maxHeight: '',
        minHeight: '',
        maxWeight: '',
        minWeight: '',
        maxLifeSpan: '',
        minLifeSpan: ''
    });

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getAllTemps());
    }, [dispatch]);
    
    function validate(newDog) {
        let errors = {};

        if(!newDog.name) errors.name = 'Breed is required'
        else if(!newDog.name.match(/^[A-Za-z]+$/)) errors.name = 'Name must contain only letters'
        else if(!newDog.name.match(/^[A-Z][a-z]+$/)) errors.name = 'Name must start with a capital letter'
        else if(dogsNames.includes(newDog.name)) errors.name = 'Breed already exists'
        
        if(!newDog.maxHeight) errors.maxHeight = 'Heigth is required'
        else if(newDog.maxHeight === '0') errors.maxHeight = "The Height can't be 0"

        if(!newDog.minHeight) errors.minHeight = 'Heigth is required'
        else if(newDog.minHeight === '0') errors.minHeight = "The Height can't be 0"
        else if(parseFloat(newDog.maxHeight) < parseFloat(newDog.minHeight)) {
            errors.minHeight = "The min Height can't be greater than the max Height"
        }

        if(!newDog.maxWeight) errors.maxWeight = 'Weigth is required'
        else if(newDog.maxWeight === '0') errors.maxWeight = "The Weight can't be 0"

        if(!newDog.minWeight) errors.minWeight = 'Weigth is required'
        else if(newDog.minWeight === '0') errors.minWeight = "The Weight can't be 0"
        else if(parseFloat(newDog.maxWeight) < parseFloat(newDog.minWeight)) {
            errors.minWeight = "The min Weight can't be greater than the max Weight"
        } 

        if(!newDog.maxLifeSpan) errors.maxLifeSpan = 'LifeSpan is required'
        else if(newDog.maxLifeSpan === '0') errors.maxLifeSpan = "The LifeSpan can't be 0"

        if(!newDog.minLifeSpan) errors.minLifeSpan = 'LifeSpan is required'
        else if(newDog.minLifeSpan === '0') errors.minLifeSpan = "The LifeSpan can't be 0"
        else if(parseFloat(newDog.maxLifeSpan) < parseFloat(newDog.minLifeSpan)) {
            errors.minLifeSpan = "The min LifeSpan can't be greater than the max LifeSpan"
        } 

        return errors
    };

    function handleChange(e) {
        setNewDog({
            ...newDog,
            [e.target.name]: e.target.value
        });

        setErrors(validate({
            ...newDog,
            [e.target.name]: e.target.value
        }));
    };
    
    function handleChangeTemp(e) {
        if(tempsSelected.length < 6) {
            setTempsSelected([
                ...tempsSelected,
                parseFloat(e.target.value)
            ]);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        if(Object.entries(errors).length === 0 && newDog.name){
            let dogData = {
                name: newDog.name,
                height: `${newDog.minHeight} - ${newDog.maxHeight}`,
                weight: `${newDog.minWeight} - ${newDog.maxWeight}`,
                life_span: `${newDog.minLifeSpan} - ${newDog.maxLifeSpan} years`,
                temperamentId: tempsSelected
            };
            dispatch(createDog(dogData));
            setMessage('Data added successfully');
            setTempsSelected([]);
            setNewDog({
                name: '',
                maxHeight: '',
                minHeight: '',
                maxWeight: '',
                minWeight: '',
                maxLifeSpan: '',
                minLifeSpan: ''
            })
        } else setMessage('Failed to fill data')
    };

    return(
        <form className={style.form} onSubmit={e => handleSubmit(e)}>
            <label>Breed: </label>
            <input name='name' value={newDog.name} onChange={e => handleChange(e)}/>
            {errors.name && (<p>{errors.name}</p>)}

            <label>Max height: </label>
            <input name='maxHeight' value={newDog.maxHeight} onChange={e => handleChange(e)}/>
            {errors.maxHeight && (<p>{errors.maxHeight}</p>)}

            <label>Min height: </label>
            <input name='minHeight' value={newDog.minHeight} onChange={e => handleChange(e)}/>
            {errors.minHeight && (<p>{errors.minHeight}</p>)}

            <label>Max weight: </label>
            <input name="maxWeight" value={newDog.maxWeight} onChange={e => handleChange(e)}/>
            {errors.maxWeight && (<p>{errors.maxWeight}</p>)}

            <label>Min weight: </label>
            <input name="minWeight" value={newDog.minWeight} onChange={e => handleChange(e)}/>
            {errors.minWeight && (<p>{errors.minWeight}</p>)}

            <label>Max life span: </label>
            <input name="maxLifeSpan" value={newDog.maxLifeSpan} onChange={e => handleChange(e)}/>
            {errors.maxLifeSpan && (<p>{errors.maxLifeSpan}</p>)}

            <label>Min life span: </label>
            <input name="minLifeSpan" value={newDog.minLifeSpan} onChange={e => handleChange(e)}/>
            {errors.minLifeSpan && (<p>{errors.minLifeSpan}</p>)}

            <label>Temperaments: </label>
            <select onChange={e => handleChangeTemp(e)}>
                <option>All</option>
                {temps.length > 0 && 
                    temps.map(e => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                    ))}
            </select>
            <p>{tempsSelected.length} added temperaments</p>

            <button type="submit">Create</button>
            <p>{message}</p>
        </form>
    )
};

export default DogCreate;