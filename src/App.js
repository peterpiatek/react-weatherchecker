import './App.css';
import React, {Component} from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

export default class App extends Component {

    /*constructor(props) {
        super(props);
        this.state = {lat: null, lon: null, errorMsg: ''};
    }*/
    // below is replacing constructor - worth if only purpose of constructor existence is to init state
    state = {lat: null, lon: null, errorMsg: null}

    getPosition() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(
            pos => this.setState({lat: pos.coords.latitude, lon: pos.coords.longitude}),
            err => this.setState({msg: err.message}),
            options)
    }

    componentDidMount() {
        this.getPosition();
    }

    renderContent () {
        if (this.state.lat && !this.state.errorMsg) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        if (!this.state.lat && this.state.errorMsg) {
            return <div>this.state.errorMsg</div>;
        }
        return <Loader />
    }

    render = () => {
        return (
            <div className={'app-container'}>
                {this.renderContent()};
            </div>
        );
    }
}

