import React from 'react';

function History(props){
    return(
        <div>
          <h1>History</h1>
      <ul>
        {props.history.history ? props.history.history.map(index => {
          return <li
            key={index.history} 
            onClick={()=> props.dispatch(props.deleteHistory(index.history))}>
              {index.history}
            </li>
        }) : ''}
      </ul>
        </div>

    )
}

export default History;