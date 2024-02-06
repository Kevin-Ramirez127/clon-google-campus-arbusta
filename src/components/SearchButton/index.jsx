// Libraries
import PropTypes from 'prop-types';

function SearchButton({ label }) {
	return (
		<button className="bg-[#f8f9fa] text-[#3C4043] text-sm m-3 p-2 px-3 rounded-sm text-center border border-solid border-transparent hover:border-neutral-300 hover:shadow-sm">
			{label}
		</button>
	);
}

export default SearchButton;

SearchButton.propTypes = {
	label: PropTypes.string.isRequired,
}