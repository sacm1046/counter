import React from 'react';
// No se agrega reactDOM ya que solo se carga en index.js
import CardNumber from './components/CardNumber';



class App extends React.Component {
    render() { 
    
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 text-center mr-5">
                            <h2>Second Counter</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-1">
                            <i class="far fa-clock"></i>
                        </div>
                        <div className="col-md-1">
                            <p>Clock</p>
                        </div>
                        <div className="col-md-1">
                            <CardNumber number={this.props.horas} />
                        </div>
                        <div className="col-md-1">
                            <p>hours</p>
                        </div>
                        <div className="col-md-1">
                            <CardNumber number={this.props.minutos} />
                        </div>
                        <div className="col-md-1">
                            <p>minutes</p>
                        </div>
                        <div className="col-md-1">
                            <CardNumber number={this.props.segundos} />
                        </div>
                        <div className="col-md-1">
                            <p>seconds</p>
                        </div>
                    </div>
                </div>

            </>
        );
    };
}

export default App;