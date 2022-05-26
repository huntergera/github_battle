import React from "react";
import {useSelector} from "react-redux";

export const SelectedLanguages =({selectLanguageHandler}) => {
    const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage);
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li
                    key={index}
                    style={{color: selectedLanguage === language ? '#d0021b' : '#000000'}}
                    onClick={() => selectLanguageHandler(language)}>
                    {language}
                </li>
            ))}
        </ul>
    )
}