import React from "react";

(function () {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://static.vecteezy.com/system/resources/thumbnails/000/620/372/small/aviation_logo-22.jpg';
  document.getElementsByTagName('head')[0].appendChild(link);
})();

if (window.location.href == "http://localhost:3000/about") {
document.title = "TRAVEL PAMPANGA - About";
}

const AboutPage = () => (
  <div className="page-bg p-4">
    <div className="d-flex flex-column page-border p-4">
    <h1 className="text-success">ABOUT</h1>
    <div className="d-flex p-2">
      <div className="container">
    <div className="row">
      <h3>History of Pampanga</h3>
        <div className="col">
          <img src="https://newsinfo.inquirer.net/files/2021/06/map-pampanga-620x324.jpg" alt=""></img>
        </div>
        <div className="col">
          <p>As a province, Pampanga was created in 1571 by the Spaniards for the purposes of government control, church territoriality and tax collection. In 1873, its present borders were drawn after the authorities ceded towns to neighboring provinces. Progress flourished after the grant of independence to the Philippines.</p>

          <p>Pampanga is a province in the Philippines, northwest of Manila. Nayong Pilipino, a cultural theme park in Clark Freeport, has replicas of major national sites. Animatronic dinosaurs roam at Dinosaurs Island nearby. A mountain trail leads to the streams of Miyamit Falls, southwest. Farther west, a turquoise lake fills Mt. Pinatubo’s volcanic crater. In Angeles, the Museo ning Angeles documents the area's history.</p>

        </div>
      </div>

      <div className="row mt-4">
      <h3>Cities and Municipalities in Pampanga</h3>
        <div className="col">
          <img src="https://assets.onepropertee.com/1200x900/crop/https%3A%2F%2Fassets.onepropertee.com%2F720x540%2Fforum-attachments%2Fpampanga.h6n7bkw5cqHcTj3uP.jpg" alt="" style={{maxWidth:'620px'}}></img>
        </div>
        <div className="col">
        <p>The Pampanga province is divided into 19 Municipalities and 3 Cities:</p>
        <section>
          <div className="row">
<div className="col">
<li>Angeles</li>
<li>Apalit</li>
<li>Arayat</li>
<li>Bacolor</li>
<li>Candaba</li>
<li>Floridablanca</li>
<li>Guagua</li>
<li>Lubao</li>
<li>Mabalacat</li>
<li>Macabebe</li>
<li>Magalang</li>
<li>Masantol</li>
</div>
<div className="col">
<li>Mexico</li>
<li>Minalin</li>
<li>Porac</li>
<li>San Fernando</li>
<li>San Luis</li>
<li>San Simon</li>
<li>Santa Ana</li>
<li>Santa Rita</li>
<li>Santo Tomas</li>
<li>Sasmuan</li>
</div>
</div>

        </section>



        </div>
      </div>
      </div>

    </div>

  </div>
  </div>
)

export default AboutPage;