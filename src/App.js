// Library imports 
import React, {useState} from 'react';

//  Styling imports 
import './app.scss';

// Component imports 
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }



function FunctionalApp() {
    // State variable and set state of that variable 
    const [data, setData] = useState("");
    const [reqParams, setReqParams] = useState("");
    
    // Function that will be used as mock data 
    const callApi = (requestParams) => {
        // mock output
        console.log(requestParams.formData)
        setReqParams(requestParams.formData)
    const data = {
        count: 2,
        results: [
            {name: 'fake thing 1', url: 'http://fakethings.com/1'},
            {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        ],
    };
    setData({data});
    }

    return(
        <React.Fragment>
            <Header />
            
            <div>Request Method: {reqParams.method}</div>
            <div>URL: {reqParams.url}</div>
            {/* function is passed as props in the Form component */}
            <Form handleApiCall={callApi}  />

            <Results data={data}  />
            <Footer />
        </React.Fragment>
    )
} 

export default FunctionalApp;