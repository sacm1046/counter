import React from 'react';
// No se agrega reactDOM ya que solo se carga en index.js
import "./App.css";
import Card from "./components/Card";


const App = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;