import React, { useState } from 'react';

import { FaCircleArrowLeft } from "react-icons/fa6";

import { FaCircleArrowRight } from "react-icons/fa6";

import './index.css'


const CardList = ({ cards }) => {
  const [cardsToShow, setCardsToShow] = useState(4);
  const [initialCard,setInitialCard]=useState(0)

  const handleViewMore = () => {
    setCardsToShow(prevCardsToShow => prevCardsToShow + 4);
    setInitialCard(prev=>prev+4)
 };


  const showNxtCards=()=>{

    if (cardsToShow<cards.length){
      setInitialCard(prev=>prev+4)
      setCardsToShow(prevCardsToShow => prevCardsToShow + 4);
  
    }




 

  }


  const showPrevCards=()=>{

    if (cardsToShow>4){
      console.log(cardsToShow)
      setInitialCard(prev=>prev-4)
      setCardsToShow(prevCardsToShow => prevCardsToShow - 4);
    }
    
  }

  return (


    <div className='footer'>
  <div className='bottom-con' >

<div className='cards-con'>
<button onClick={showPrevCards} className='button'><FaCircleArrowLeft size={22} /></button>

{cards.slice(initialCard, cardsToShow).map((card, index) => (
<Card key={index} {...card} />
))}



<button className="button" onClick={showNxtCards}><FaCircleArrowRight size={22} /></button>
</div>




{cards.length > cardsToShow && (
  <button className="view-more"onClick={handleViewMore}>View More</button>
)}


</div>


<div className='timeline'>
<div className='drop'>
  <h3 className='timeline-heading'>Recent Releases</h3> 
  <select className='select'>
    <option>India</option>
    <option>USA</option>
    <option>England</option>
    <option>Australia</option>
  </select>
</div>
<hr/> 
<div class="container">


  <div class="rightbox">
    <div class="rb-container">
      <ul class="rb">
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            April 25 2024
          </div>
          <h4 className='timelines'>Industrial Production</h4>
          <div class="item-title">Index of Industrial Production(IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year.Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.</div>

        </li>
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
          April 24 2024
          </div>
          <h4  className='timelines'>CPI Inflation</h4>
          <div class="item-title">India's Inflation eased to 1.5% in Jan, a 60 basis points decrease from the previous month. Consumer Food Price Index(CFPI) declined from 9.5% in Dec'23 to 8.3% in....</div>

        </li>
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
          April 22 2024
          </div>
          <h4  className='timelines'>Business Cycle</h4>
          <div class="item-title">Index of Industrial Production(IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year.Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.</div>

        </li>

      </ul>

    </div>
  </div>
</div>

</div>
    </div>
  
  );
};




const Card = ({ title,image,description }) => {
  return (
    <div className="card">
      <img className='card-size' src={image} alt={title} />
     <div className='card-info'>
     <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
     </div>
    </div>
  );
};



export default CardList;