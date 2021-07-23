import React from 'react';

function Results(props) {

  return (
    <section>
      <div style={{display:'flex', justifyContent: 'center', width: '30%'}}>{props.data.data ? <img src={props.data} alt={'Pokemon Sprite'}/> : null }</div>
      <pre>{props.data.data ? JSON.stringify(props.data.data, undefined, 2) : null}</pre>
    </section>
  );

}

export default Results;