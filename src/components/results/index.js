import React from 'react';

function Results(props) {

  return (
    <section>
      <div style={{display:'flex', justifyContent: 'center', width: '30%', height: '10%'}}>{props.data ? <img src={props.data.sprite} alt={'Pokemon Sprite'}/> : null }</div>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );

}

export default Results;