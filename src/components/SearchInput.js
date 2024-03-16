import { OutlinedInput } from '@mui/material';
import SearchIcon from './icons/SearchIcon';
import { ColorTheme, InputRadius } from './ui/theme';
import ErrorSearchIcon from './icons/ErrorSearchIcon';

function SearchInput({ searchInputValue, setSearchInputValue, setSearchInputInvalid, setSearchResults, setNoResultError, searchInputInvalid, disabled}) {
	
	function handleSearchInputValue(e){
		setSearchInputValue(e.target.value);

		if(e.target.value === ''){
			setSearchResults([])
			setSearchInputInvalid(true)
		}else{
			setSearchInputInvalid(false)
			setNoResultError(false)
		}
	}

	return (
		<OutlinedInput
			id="searchInput"
			placeholder="Search..."
			startAdornment={searchInputInvalid ?  <ErrorSearchIcon /> : <SearchIcon />}
			sx={{
				borderRadius: InputRadius['pill'],
				backgroundColor: ColorTheme.default['base'],
				'& fieldset': {
					borderColor: searchInputInvalid ?  'red' : 'black',
				  },
			}}
			fullWidth={true}
			disabled={disabled}
			onChange={handleSearchInputValue}
			value={searchInputValue}
			></OutlinedInput>
	);
}
export default SearchInput;
