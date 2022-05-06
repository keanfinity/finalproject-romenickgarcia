import React from 'react';
import journeyContent from './journey-content';
import JourneyList from '../components/JourneyList';


(function () {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://static.vecteezy.com/system/resources/thumbnails/000/620/372/small/aviation_logo-22.jpg';
  document.getElementsByTagName('head')[0].appendChild(link);
})();

if (window.location.href == "http://localhost:3000/journey-list") {
document.title = "TRAVEL PAMPANGA - List of Journies";
}
const JourneyListPage = () => (
  <div className="page-bg p-4">
    <div className="d-flex flex-column page-border p-4">
    <h1 className="text-success">JOURNIES TO FOLLOW - Pampanga Chapter</h1>
    <JourneyList journey={journeyContent} />
    </div>
  </div>
)

export default JourneyListPage;