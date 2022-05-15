import React from "react";
import {Link} from "react-router-dom";

export const Battle = () => {
    return (
        <div>
            <h1>Battle</h1>
            <div className="row">
                <Link className='button' to='/'>Home</Link>
                <Link className='button' to='/popular'>Popular</Link>
            </div>
        </div>
    )
}