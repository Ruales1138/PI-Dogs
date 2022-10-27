import React from "react";
import { NavLink } from 'react-router-dom';
import dogLogo from '../../images/dogLogo.png';
import style from './InitialPage.module.css'

function InitialPage() {
    return(
        <div className={style.container}>
            <img src={dogLogo} width="450" height="450" alt=''/>
            <NavLink className={style.link} to='/dogs'>Home</NavLink>
        </div>
    )
};

export default InitialPage;