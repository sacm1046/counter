import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

            let sec = 0;
            let min = 0;
            let hou = 0;

        let count = setInterval(function () {
            
            ReactDOM.render(<App segundos={sec} minutos={min} horas={hou} />, document.querySelector("#root"))
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
            else if (min === 60) {
                min = 0;
                hou++;
            }
            else if (hou === 24) {
                hou = 0;
                clearInterval(count);
            }
        }, 10); 








