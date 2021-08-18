import React from "react";

const Loader = ({text='loading...'}) => {

    return (
        <div className={'loader'}>
            <div className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui big text loader">{text}</div>
                </div>
            </div>
        </div>
    );
};

//this can be used to setup default props instead of fn params
/*Loader.defaultProps = {
    text: 'Loading...'
}*/

export default Loader;