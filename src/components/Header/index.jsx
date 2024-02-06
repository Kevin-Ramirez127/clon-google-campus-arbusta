// Libraries
import React from 'react';
// Context
import { TranslateContext } from '../../context/TranslateContext';
// Components
import Button from '../Button';
import AppsModal from '../AppsModal';

function Header() {
	const { t } = React.useContext(TranslateContext);

	const links = [
		{ name: t('Gmail'), to: 'https://mail.google.com/mail' },
		{ name: t('Images'), to: 'https://www.google.com.uy/imghp' },
	];
	return (
		<header className="p-6 pt-2">
			<ul className="flex list-none float-right justify-center items-center">
				{links.map((link) => (
					<li
						key={link.name}
						className="inline mx-3 text-xs opacity-90 no-underline hover:underline cursor-pointer"
					>
						<a href={link.to}>{link.name}</a>
					</li>
				))}
				<li className="float-right mx-4 cursor-pointer relative">
					<AppsModal />
				</li>
				<li>
					<Button
						to="https://accounts.google.com/"
						type="principal"
						label={t('Sign In')}
					/>
				</li>
			</ul>
		</header>
	);
}

export default Header;
