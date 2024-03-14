import { OutlinedInput } from '@mui/material';
import SearchIcon from './icons/SearchIcon';
import { ColorTheme, InputRadius } from './ui/theme';
// import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

function SearchInput({ setSearchValue, searchValue, disabled }) {
	// useGTMDispatch
	function handleSearchValue(e) {
		setSearchValue(e.target.value);
	}

	return (
		<OutlinedInput
			placeholder="Search..."
			startAdornment={<SearchIcon />}
			sx={{
				borderRadius: InputRadius['pill'],
				mt: 5,
				backgroundColor: ColorTheme.default['base'],
			}}
			fullWidth={true}
			disabled={disabled}
			onChange={handleSearchValue}
			value={searchValue}
			></OutlinedInput>
	);
}

export default SearchInput;
