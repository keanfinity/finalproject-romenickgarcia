import React from "react";
import {Link} from 'react-router-dom';

const JourneyList = ({journey}) => (
  <>
    {journey.map((journey, key) => (
      <Link key={key} to={`/journey-page/${journey.name}`}>
        <div className="d-flex justify-center text-center m-4">
          <div className="d-flex text-center p-4 flex-column page-content content-bg shadow">
        <h3>{journey.title}</h3>
        <p>{journey.content[0].substring(0, 100)}...</p>
        <div className="container item-center p-4">
        {journey.image}
        </div>
        </div>
        </div>
      </Link>
      
    ))}
  </>
)

export default JourneyList;