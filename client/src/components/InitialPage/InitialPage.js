import React from "react";
import { NavLink } from 'react-router-dom';
import dogLogo from '../../images/dogLogo.png';

function InitialPage() {
    return(
        <div>
            <img src={dogLogo} width="500" height="500" alt=''/>
            <NavLink to='/dogs'>Home</NavLink>
        </div>
    )
};

export default InitialPage;