import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>Welcome to GitHub Battle</h1>
            <div className="row">
                <Link className='button' to='/battle'>Battle</Link>
                <Link className='button' to='/popular'>Popular</Link>
            </div>
        </div>
    )
}