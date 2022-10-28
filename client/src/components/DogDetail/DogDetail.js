import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getDogById, cleanDetail } from '../../redux/actions';
import style from './DogDetail.module.css';

function DogDetail(props) {
    const dispatch = useDispatch();
    const dogDetail = useSelector(state => state.dogDetail);
    const id = props.match.params.id;

    useEffect(()=>{
        dispatch(getDogById(id))
        return function () {
            dispatch(cleanDetail());
          };
    }, [dispatch, id])

    return dogDetail.name ? (
        <div className={style.container}>
            <h1>{dogDetail.name}</h1>
            <p>Height: {dogDetail.height} cm</p>
            <p>Weight: {dogDetail.weight} kg</p>
            <p>Life span: {dogDetail.life_span}</p>
            <p>Temperament: {dogDetail.temperament}</p>
            <img src={dogDetail.image} width="300" height="200" alt=''/>
        </div>
    ) : (<p>Loading...</p>)
};

export default DogDetail;