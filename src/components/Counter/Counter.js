import React from "react";
import "./Counter.scss"
import {withRouter} from "react-router-dom";

function Counter() {

    return(
        <>
            <div className="counter__container">
                <p className="counter__clock">00:02:45:21</p>
            </div>
        </>
    );
}

export default withRouter(Counter);