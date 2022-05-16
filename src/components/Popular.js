import React from "react";
import {SelectedLanguages} from "./SelectedLanguages";
import {fetchPopularRepos} from "../utils/api";
import {Repos} from "./Repos";
import {Spinner} from "./shared/Spinner";

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        }
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    componentDidMount() {
        this.fetchHandler(this.state.selectedLanguage);
    }

    fetchHandler(language) {
        fetchPopularRepos(language)
            .then(data => this.setState({repos: data}))
            .catch(error => this.setState({error: error.message}))
    }

    selectLanguage(language) {
        if(language !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: language, repos: null});
            this.fetchHandler(language);
        }
    }

    render() {
        if(this.state.error) {
            return <p>{this.state.error}</p>;
        }

        return (
            <div>
                <SelectedLanguages
                    selectedLanguage={this.state.selectedLanguage}
                    selectLanguageHandler={this.state.repos ? this.selectLanguage : null}
                />
                {this.state.repos ? <Repos repos={this.state.repos} /> : <Spinner height="100" width="100" color="#ffe07d"/>}
            </div>
        )
    }
}

export default Popular;