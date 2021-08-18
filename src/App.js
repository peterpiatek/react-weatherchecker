import './App.css';
import React, {Component} from "react";
// import SeasonDisplay from "./SeasonDisplay";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {lat: null, lon: null, errorMsg: ''};
    }

    getPosition()
    {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log(this);
                this.setState({lat: pos.coords.latitude, lon: pos.coords.longitude});
            },
            (err) => {
                // console.warn(`ERROR(${err.code}): ${err.message}`);
                this.setState({msg: err.message})
            }, this.options);
    }

    componentDidMount(){
        this.getPosition();
    }

    render = ()=>{
        return (
            <h1>lat: {this.state.lat || this.state.msg || 'loading'}</h1>
        );
    }
}

