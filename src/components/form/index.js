
import React, {useState} from 'react';
import axios from 'axios';


import './form.scss';

function Form(props){
  const [pokemon, setPokemon] = useState('');

  const handleSubmit = () => {
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(function(response) {
      let formData = {
        method:'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`, 
        data: response,
      };
      console.log('From form', formData);
      props.handleApiCall({formData});
    })
    .catch( function(err){
      console.error(err);
    })


  }

  
    return (
        <>
            <form >
                <label>
                    <span>URL: </span>
                    <input name='url' type='text' onChange={(e) => setPokemon(e.target.value)}/>
                    <button onClick={() => handleSubmit()} style={{color: "#02a9ea"}} type="button">GO!</button>
                </label>
                    <label className="methods">
                        <span id="get">GET</span>
                        <span id="post">POST</span>
                        <span id="put">PUT</span>
                        <span id="delete">DELETE</span>
                    </label>
            </form>
        </>
    );
}

export default Form;