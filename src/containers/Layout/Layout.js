import React from 'react';
import classes from './Layout.css';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';
//import Aux from '../../HOC/Aux/Aux';
//import LeftNav from '../../components/UI/LeftNav/LeftNav';
//import RightDisplay from '../../components/UI/RightDisplay/RightDisplay';

const layout = () =>{

    return ( 
        <div className={classes.Layout}>
            <Header />   
            {/*<LeftNav />
            <RightDisplay /> */}
            <Footer /> 
        </div>
    );
}

export default layout;