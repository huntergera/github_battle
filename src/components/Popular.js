import React from "react";
import {Link} from "react-router-dom";

export const Popular = () => {
    return (
        <div>
            <h1>Popular</h1>
            <div className="row">
                <Link className='button' to='/'>Home</Link>
                <Link className='button' to='/battle'>Battle</Link>
            </div>
        </div>
    )
}