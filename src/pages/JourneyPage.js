import React from "react";
import {useParams} from 'react-router-dom';
import journeyContent from './journey-content';
import JourneyList from '../components/JourneyList';

const JourneyPage = () => {
  const {name} = useParams();
  const journey = journeyContent.find(journey => journey.name === name);

  if(!journey) return <h1>journey does not exist!</h1>

  const otherJourney = journeyContent.filter(journey => journey.name !== name);

  return (
    <div className="page-bg p-4">
    <div className="d-flex flex-column page-border p-4">
    <h1 className="text-success">PAMPANGA TRAVEL BLOG - Romenick B. Garcia</h1>

    <div className="d-flex p-4 mt-4 ">
      <div className="container d-flex flex-column text-center page-content content-bg shadow p-4">
      <h1>{journey.title}</h1>
      <section className="m-4">
      {journey.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      </section>
      <section  className="m-4">
      {journey.video}
      </section>
      </div>
      </div>
        <div className="d-flex flex-column text-center ">
      <h2>OTHER JOURNIES YOU MAY LIKE</h2>
      <JourneyList className='bg-light' journey={otherJourney}/>
      </div>
      </div>
      
  </div>
  )
}

export default JourneyPage;