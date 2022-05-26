import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import {
    setPlayerOneImage,
    setPlayerOneName,
    setPlayerTwoImage,
    setPlayerTwoName
} from "../../redux/actions/battle.actions";

const mapStateToProps = ({battleReducer}) => ({
    playerOneName: battleReducer.playerOneName,
    playerTwoName: battleReducer.playerTwoName,
    playerOneImage: battleReducer.playerOneImage,
    playerTwoImage: battleReducer.playerTwoImage
})

class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, username) {
        if (id === 'playerOne') {
            this.props.dispatch(setPlayerOneName(username));
            this.props.dispatch(setPlayerOneImage(`https://github.com/${username}.png?size200`));
        } else if (id === 'playerTwo') {
            this.props.dispatch(setPlayerTwoName(username));
            this.props.dispatch(setPlayerTwoImage(`https://github.com/${username}.png?size200`));
        }
    }

    handleReset(id) {
        if (id === 'playerOne') {
            this.props.dispatch(setPlayerOneName(''));
            this.props.dispatch(setPlayerOneImage(null));
        } else if (id === 'playerTwo') {
            this.props.dispatch(setPlayerTwoName(''));
            this.props.dispatch(setPlayerTwoImage(null));
        }
    }

    render() {
        const {match} = this.props;

        return (
            <div>
                <div className='row'>
                    {!this.props.playerOneName ?
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            onSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreview
                            username={this.props.playerOneName}
                            avatar={this.props.playerOneImage}
                        >
                            <button
                                className='reset'
                                onClick={this.handleReset.bind(this, 'playerOne')}>
                                Reset
                            </button>
                        </PlayerPreview>
                    }
                    {!this.props.playerTwoName ?
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreview
                            username={this.props.playerTwoName}
                            avatar={this.props.playerTwoImage}
                        >
                            <button
                                className='reset'
                                onClick={this.handleReset.bind(this, 'playerTwo')}>
                                Reset
                            </button>
                        </PlayerPreview>
                    }
                </div>
                {this.props.playerOneImage && this.props.playerTwoImage &&
                    <Link className='button' to={{
                        pathname: `${match.url}/results`,
                        search: `?playerOneName=${this.props.playerOneName}&playerTwoName=${this.props.playerTwoName}`
                    }}>
                        Battle
                    </Link>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Battle);