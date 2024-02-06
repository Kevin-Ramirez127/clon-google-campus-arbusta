// Libraries
import React from 'react';
// Components
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
// Context
import { TranslateContext } from '../../context/TranslateContext';

function Google() {
	const { t, setLanguage, actLang, handleLanguage } = React.useContext(TranslateContext);

	const footerItems = {
		left: [
			{ name: t('About'), to: 'https://about.google/' },
			{ name: t('Advertising'), to: 'https://ads.google.com/' },
			{ name: t('Business'), to: 'https://smallbusiness.withgoogle.com/' },
			{ name: t('How Search works'), to: 'https://www.google.com/search/howsearchworks/' },
		],
		right: [
			{ name: t('Privacy'), to: 'https://policies.google.com/' },
			{ name: t('Terms'), to: 'https://policies.google.com/' },
			{ name: t('Settings'), to: '#' },
		],
	};
	return (
		<div className="flex flex-col">
			<Header />
			<main className="flex flex-col items-center mt-16">
				<img
					src="/images/google-logo.png"
					alt="google logo"
					width={272}
				/>
				<SearchBar />
				<section className="mt-2">
					<p className="text-gray-600 text-sm font-extralight">
						{t('Google offered in:')}{' '}
						<span className="text-blue-600">
							<button
								onClick={() =>
									setLanguage(handleLanguage(actLang))
								}
							>
								{t('SELECTED_LANGUAGE')}
							</button>
						</span>
					</p>
				</section>
			</main>
			<footer className="absolute bottom-0 bg-neutral-100 w-screen overflow-hidden text-sm">
				<section className="flex px-8 py-4 border-b border-solid border-b-neutral-300">
					Uruguay
				</section>
				<section className="flex justify-evenly items-center px-8 whitespace-nowrap">
					<ul className="inline-flex flex-col sm:flex-row box-border">
						{footerItems.left.map((item) => (
							<li
								key={item.name}
								className="inline no-underline hover:underline cursor-pointer p-4"
							>
								<a href={item.to}>{item.name}</a>
							</li>
						))}
					</ul>

					<ul className="inline-flex flex-col sm:flex-row box-border">
						{footerItems.right.map((item) => (
							<li
								key={item.name}
								className="inline no-underline hover:underline cursor-pointer p-4"
							>
								<a href={item.to}>{item.name}</a>
							</li>
						))}
					</ul>
				</section>
			</footer>
		</div>
	);
}

export default Google;
