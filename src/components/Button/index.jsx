// Libraries
import PropTypes from 'prop-types';

function Button({ type, label, to }) {
	const JustButton = () => {
		switch (type) {
			case 'principal':
				return (
					<button
						className={
							'bg-blue-600 text-white py-2 px-6 rounded-md text-sm cursor-pointer select-none'
						}
					>
						{label}
					</button>
				);
			case 'secondary':
				return (
					<button
						className={
							'bg-white text-black py-2 px-6 rounded-md text-sm cursor-pointer select-none'
						}
					>
						{label}
					</button>
				);
			case 'third':
				return (
					<button
						className={
							'text-blue-600 border border-solid border-blue-600 py-2 px-6 rounded-3xl text-sm cursor-pointer transition-colors hover:bg-blue-100 select-none'
						}
					>
						{label}
					</button>
				);
		}
	};

	return (
		<>
			{to ? (
				<a href={to}>
					<JustButton />
				</a>
			) : (
				<JustButton />
			)}
		</>
	);
}

export default Button;

Button.propTypes = {
	type: PropTypes.oneOf(['principal', 'secondary', 'third']).isRequired,
	label: PropTypes.string.isRequired,
	to: PropTypes.string,
}

Button.defaultProps = {
	to: null,
}