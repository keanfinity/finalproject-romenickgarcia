import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


(function () {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://pngshare.com/wp-content/uploads/2021/06/Netflix-Logo-Wallpaper-4.png';
  document.getElementsByTagName('head')[0].appendChild(link);
})();

ReactDOM.render( 
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);