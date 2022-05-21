import React, {useEffect} from "react";

const Results = (props) => {

    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        const playerOneName = searchParams.get('playerOneName');
        const playerTwoName = searchParams.get('playerTwoName');

        console.log(playerOneName, playerTwoName);
    }, []);

    return (
        <div>
            123
        </div>
    )
}

export default Results;