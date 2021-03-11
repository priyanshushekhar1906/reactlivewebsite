import React from 'react';
import Heading from '../project1/Heading';
import Images from '../project1/Images';
function Card(props)
{
//   console.log(props);
  return (
    <>
    <div className="cards">
      <div className="card">
        <Images imgsrc={props.imgsrc}/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <Heading  sname={props.sname}/>
          <a href="" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>  
  );
}

export default Card;