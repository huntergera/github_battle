import React from "react";
import {useSelector} from "react-redux";
import {Spinner} from "../shared/Spinner";

export const Repos = () => {
    const repos = useSelector(state => state.popularReducer.repos);
    if(!repos) {
        return <Spinner height="100" width="100" color="#ffe07d"/>
    } else {
        return (
            <ul className='popular-list'>
                {repos.map((repo, index) => (
                        <li key={repo.id} className='popular-item'>
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className='space-list-items'>
                                <li>
                                    <img className='avatar' src={repo.owner.avatar_url} alt="repo avatar"/>
                                </li>
                                <li><a href={repo.html_url} target='_blank'>{repo.name}</a></li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count}</li>
                            </ul>
                        </li>
                    )
                )}
            </ul>
        )
    }
}