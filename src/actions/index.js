import axios from 'axios';


//fetching smurf data
export const getSmurf = () => dispatch => {

    dispatch(fetchStart())
    
    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch(fetchComplete(resp.data));
    })
    .catch(err => {
        dispatch(fetchErr(err));
    });

}

//posting smurf data
export const getPost = (body) => dispatch => {
   
    dispatch(startPost());

    axios.post('http://localhost:3333/smurfs', body)
        .then(resp => {
            dispatch(postComplete(resp.data));

    })
    .catch(err => {
        dispatch(postErr(err.response.data.Error));
    });
}   



// get action export
export const FETCH_START = 'FETCH_START';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_ERR = 'FETCH_ERR';


// post action export
export const START_POST = 'START_POST';
export const POST_COMPLETE = 'POST_COMPLETE';
export const POST_ERR = 'POST_ERR';


//get action func export
export const fetchStart = () => {
    return({type: FETCH_START});
};
export const fetchComplete = (resp) => {
    return({type: FETCH_COMPLETE, payload:resp});
};
export const fetchErr = (error) => {
    return({type: FETCH_ERR, payload:error});
};


//post action func export
export const startPost = () => {
    return({type: START_POST});
};
export const postComplete = (resp) => {
    return({type: POST_COMPLETE, payload:resp});
};
export const postErr = (error) => {
    return({type: POST_ERR, payload:error})
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.