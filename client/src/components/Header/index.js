import React from "react";

import './index.css';


function header() {
    return (
        <div className="header">
            <div id='logo'>
                <img src={require('./images/logo-endless.svg')} alt='Logo' />
            </div>
        </div>
    )
};

export default header;