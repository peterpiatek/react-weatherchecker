import React, {Component} from "react";

export default class SeasonDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {lat: '', lon: ''};
    }

    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    getPosition() {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.state.lat = pos.coords.latitude;
                this.state.lon = pos.coords.longitude;
            },
            (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }, this.options);
    }

    render = () => {
        return (
            <div>
                This is it: {this.getPosition()}
            </div>
        );
    }
}