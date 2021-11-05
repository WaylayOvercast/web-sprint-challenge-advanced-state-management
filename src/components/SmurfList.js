// react and other library imports
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//file and componet imports
import { getSmurf } from '../actions'
import Smurf from './Smurf';



const SmurfList = ({isLoad, smurfs, getSmurf})=> {

    useEffect(()=> {
        getSmurf();
    }, []);
    
    if (isLoad) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {smurfs.map( smurf => <Smurf key={smurf.id}smurf={smurf}/>)}
    </div>);
};


const mapStateToProps = state => {
    return{
    smurfs: state.smurfs,
    isLoad: state.isLoad
    };
};
export default connect(mapStateToProps,{getSmurf})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.