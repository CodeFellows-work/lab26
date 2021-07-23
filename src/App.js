// Library imports 
import React, {useEffect, useState} from 'react';
import axios from 'axios';
//  Styling imports 
import './app.scss';

// Component imports 
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function FunctionalApp() {
    // State variable and set state of that variable 
    const [data, setData] = useState("");
    const [reqParams, setReqParams] = useState("");
    
    // Function that will be used as mock data 
useEffect(() => {
    if(Object.keys(reqParams).length) axios(reqParams).then(res => {
        setData(res)
    });
    console.log('reqParams from App', reqParams);
},[reqParams]);

    return(
        <React.Fragment>
            <Header />
            
            <div>Request Method: {reqParams.methods}</div>
            <div>URL: {reqParams.url}</div>
            {/* function is passed as props in the Form component */}
            <Form setReqParams={setReqParams} />

            <Results data={data}  />
            <Footer />
        </React.Fragment>
    )
} 

export default FunctionalApp;