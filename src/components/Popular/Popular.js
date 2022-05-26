import React from "react";
import {connect} from "react-redux";
import {SelectedLanguages} from "./SelectedLanguages";
import {Repos} from "./Repos";
import {setSelectedLanguage } from "../../redux/actions/popular.actions";
import {fetchPopularReposThunk} from "../../redux/thunk/popular.thunk";

const mapStateToProps = ({popularReducer}) => ({
    selectedLanguage: popularReducer.selectedLanguage,
    repos: popularReducer.repos,
    error: popularReducer.error,
})

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    componentDidMount() {
        this.fetchHandler(this.props.selectedLanguage);
    }

    fetchHandler(language) {
        this.props.dispatch(fetchPopularReposThunk(language));
    }

    selectLanguage(language) {
        if(language !== this.props.selectedLanguage) {
            this.props.dispatch(setSelectedLanguage(language));
            this.fetchHandler(language);
        }
    }

    render() {
        if(this.props.error) {
            return <p>{this.props.error}</p>;
        }

        return (
            <div>
                <SelectedLanguages selectLanguageHandler={this.selectLanguage}/>
                <Repos />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Popular);