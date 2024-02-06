// Libraries
import React from 'react';
// Context
import { TranslateContext } from '../../context/TranslateContext';
// Styles
import './style.css';
// Components
import SearchButton from '../SearchButton';

function SearchBar() {
	const { t } = React.useContext(TranslateContext);

	return (
		<>
			<div className="search-bar flex justify-center items-center mt-5 mb-4">
				<picture className="mr-3">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						fill="#9aa0a6"
						width="20"
						height="20"
						x="0"
						y="0"
						viewBox="0 0 24 24"
						xmlSpace="preserve"
					>
						<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
					</svg>
				</picture>
				<input
					className="w-full"
					type="search"
					name=""
					id=""
				/>
				<picture
					className="ml-4 cursor-pointer"
					title={t('Search by voice')}
				>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						x="0"
						y="0"
						width="20"
						height="20"
						viewBox="0 0 296.8 426.4"
						xmlSpace="preserve"
					>
						<path
							d="M148.4 276.1c-35.2 0-63.7-28.5-63.7-63.7V63.7C84.7 28.5 113.2 0 148.4 0s63.7 28.5 63.7 63.7v148.7c0 35.2-28.5 63.7-63.7 63.7z"
							fill="#4285f4"
						/>
						<rect
							x="127.2"
							y="348.5"
							width="42.5"
							height="77.9"
							fill="#34a853"
						/>
						<path
							d="M254.8 213.2c-.1 58.6-47.8 106.3-106.4 106.3-29.4 0-56.1-12-75.4-31.4l-29.7 29.7c26.9 26.9 64 43.6 105.1 43.6 81.9 0 148.3-66.4 148.4-148.3h-42z"
							fill="#ea4335"
						/>
						<path
							d="M73 288.1c-19.1-19.2-31-45.7-31-74.9H0C0 254 16.6 291 43.3 317.8L73 288.1z"
							fill="#fbbc05"
						/>
					</svg>
				</picture>
				<picture
					className="ml-4 cursor-pointer rel"
					title={t('Search by image')}
				>
					<svg
						viewBox="0 0 192 192"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
					>
						<rect
							fill="none"
							height="192"
							width="192"
						></rect>
						<g>
							<circle
								fill="#34a853"
								cx="144.07"
								cy="144"
								r="16"
							></circle>
							<circle
								fill="#4285f4"
								cx="96.07"
								cy="104"
								r="24"
							></circle>
							<path
								fill="#ea4335"
								d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
							></path>
							<path
								fill="#fbbc05"
								d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
							></path>
							<path
								fill="#4285f4"
								d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
							></path>
						</g>
					</svg>
				</picture>
			</div>
			<center>
				<SearchButton label={t('Google Search')} />
				<SearchButton label={t("I'm Feeling Lucky")} />
			</center>
		</>
	);
}

export default SearchBar;
