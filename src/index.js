import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'



class App extends React.Component {


    state = { lat: null, errorMessage: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude })
            , err => this.setState({ errorMessage: err.message })
        );
        console.log("component rendered at" + new Date().toLocaleString());
    }



    componentDidUpdate() {
        console.log("component updated at" + new Date().toLocaleString());
    }

    renderContent() {
        if (this.state.errorMessage === '') {

            return <SeasonDisplay lat={this.state.lat} />

        }
        else {
            return <div>Error: {this.state.errorMessage} </div>
        }
    }

    // react requirement
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );

    }
}

ReactDOM.render(<App />, document.querySelector("#root"));