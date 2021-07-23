// Library imports 
import React, {useEffect, useState, useReducer } from 'react';
import axios from 'axios';
//  Styling imports 
import './app.scss';

// Component imports 
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/History/history.js';


const initialState = {
    history: [],
    active: {}
}

//useReducer() state for history 
const reducer = (stateHistory, action) => {

    switch(action.type){
        case 'ADD_HISTORY':
            return {...stateHistory, history: [...stateHistory.history, action.payload]}
        case 'DELETE_HISTORY': 
            return {...stateHistory, history: stateHistory.history.filter(hist => hist.requests !== action.payload)}
        case 'ACTIVATE_HISTORY': 
            return {...stateHistory, history: stateHistory.history.filter(hist => hist.requests === action.payload)}
        default:
            return stateHistory;
    }
}

const addHistory = (history) => {
    return {
        type: 'ADD_HISTORY',
        payload: history,
    }
}
const deleteHistory = (requests) => {
    return {
        type: 'DELETE_HISTORY',
        payload: requests,
    }
}

function FunctionalApp() {
    // State variable and set state of that variable 
    const [data, setData] = useState("");
    const [reqParams, setReqParams] = useState("");
    //state for reducer
    const [stateHistory, dispatch] = useReducer(reducer, initialState);

    // useEffect is used to call api or to url that user submits on form.
useEffect(() => {
    if(Object.keys(reqParams).length) axios(reqParams).then(res => {
        setData(res)
        dispatch(addHistory({request: res}))
    });
    console.log('reqParams from App', reqParams);
   
},[reqParams]);
    console.log('stateHistory from App', stateHistory);
    return(
        <React.Fragment>
            <Header />
            
            <div>Request Method: {reqParams.methods}</div>
            <div>URL: {reqParams.url}</div>
            {/* function is passed as props in the Form component */}
            <Form setReqParams={setReqParams} />
            <Results style={{fontSize:"10px" }} data={data}  />
            <History deleteHistory={deleteHistory} dipatch={dispatch} history={stateHistory}/> 
            <Footer />
        </React.Fragment>
    )
} 

export default FunctionalApp;