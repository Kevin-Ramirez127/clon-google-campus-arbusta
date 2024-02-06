// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// db
import { translations } from '../db/translations';

export const TranslateContext = React.createContext();

export const TranslateProvider = ({ children }) => {
	const [actLang, setActLang] = React.useState(
		localStorage.getItem('lang') ?? 'en'
	);

	const setLanguage = (lang) => {
		setActLang(lang);
		return localStorage.setItem('lang', lang);
	};

	const t = (label) => {
		const translated = translations[label]?.[actLang] || label;
		return translated;
	};

	function handleLanguage(actLang) {
		switch(actLang) {
			case 'en':
				return 'es';
			case 'es':
				return 'en';
		}
	}

	return (
		<TranslateContext.Provider
			value={{
				actLang,

				t,
				setLanguage,
				handleLanguage
			}}
		>
			{children}
		</TranslateContext.Provider>
	);
};

TranslateProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
