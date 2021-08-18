import React from 'react';

const seasonConfig = {
    'summer': {
        text: "It's summer",
        icon: 'iconanimate icon massive sun',
    },
    'winter': {
        text: "It's winter",
        icon: 'iconanimate icon massive snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'summer' : 'winter';
    }
}

const SeasonDisplay = ({lat}) => {

    const season = getSeason(lat, new Date().getMonth());
    const {text, icon} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={icon}/>
            <h1>{text}</h1>
        </div>
    );
};

export default SeasonDisplay;
