// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// db
import { googleApps } from '../../db/googleApps.js';
// Styles
import './style.css';
// Context
import { TranslateContext } from '../../context/TranslateContext.jsx';
// Components
import Button from '../Button';

function AppsModal() {
	const { t } = React.useContext(TranslateContext);

	const [isModalVisible, setIsModalVisible] = React.useState(false);
	const [hoverIcon, setHoverIcon] = React.useState(false);

	return (
		<>
			{hoverIcon && (
				<div className="absolute w-10 h-10 -top-1/3 -left-1/3 bg-neutral-200 -z-10 rounded-full" />
			)}
			<picture
				className="opacity-60"
				onClick={() => setIsModalVisible((prev) => !prev)}
				onMouseEnter={() => setHoverIcon(true)}
				onMouseLeave={() => setHoverIcon(false)}
			>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					x="0"
					y="0"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlSpace="preserve"
					fill="currentColor"
				>
					<path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
				</svg>
			</picture>

			{isModalVisible && (
				<div className="w-[370px] h-[470px] bg-[#E9EEF6] absolute -translate-x-1/2 sm:-translate-x-full cursor-default rounded-3xl flex flex-col justify-center shadow-md shadow-neutral-400">
					<div className="w-11/12 bg-[#F8FAFD] rounded-3xl mt-3 mx-3 flex flex-wrap justify-center overflow-x-hidden overflow-y-scroll no-scrollbar">
						{googleApps.map((app) => (
							<App
								key={app.name}
								label={app.name}
								image={app.image}
							/>
						))}
						<div className="py-10 w-full bg-[#E9EEF6] flex justify-center items-center">
							<Button
								type="third"
								label={t('More from Google Workspace Marketplace')}
								to="https://about.google/products/"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

function App({ image, label }) {
	return (
		<div className="w-20 h-20 inline-flex flex-col justify-center items-center m-3 rounded-2xl hover:bg-neutral-200 cursor-pointer select-none">
			<img
				src={image}
				alt={label}
				width={32}
			/>
			<p className='whitespace-nowrap'>{label}</p>
		</div>
	);
}

export default AppsModal;

App.propTypes = {
	image: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}