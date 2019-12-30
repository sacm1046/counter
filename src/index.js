import React from 'react';
import ReactDOM from 'react-dom';


// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

class Home extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Home name="Jonathan M." />, document.querySelector("#root"));






