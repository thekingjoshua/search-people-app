import { OutlinedInput } from '@mui/material';
import SearchIcon from '../SearchIcon';

function SearchInput({ setSearchValue, searchValue }) {
	function handleSearchValue(e) {
		setSearchValue(e.target.value);
	}


	return (
		<OutlinedInput
			placeholder="Search"
			startAdornment={<SearchIcon />}
			sx={{
				borderRadius: '48px',
				mt: 5,
				backgroundColor: '#F2F4F6',
				width: "100%"
			}}
			onChange={handleSearchValue}
			value={searchValue}
		></OutlinedInput>
	);
}

export default SearchInput;
