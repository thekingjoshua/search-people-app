import { OutlinedInput } from '@mui/material';
import SearchIcon from './icons/SearchIcon';
import { ColorTheme, InputRadius } from './ui/theme';
import ErrorSearchIcon from './icons/ErrorSearchIcon';
import { useGTMDispatch, GTMProvider } from '@elgorditosalsero/react-gtm-hook';

function SearchInput({ searchInputValue, setSearchInputValue, setSearchInputInvalid, setSearchResults, setNoResultError, searchInputInvalid, disabled}) {
	const gtmDispatch = useGTMDispatch();

	function handleSearchInputValue(e){
		setSearchInputValue(e.target.value);
		setSearchInputInvalid(false)
		
		gtmDispatch({
			event: 'search', // Define your custom event name
			searchQuery: e.target.value, // Pass additional data, like the search query
		  });

		if(e.target.value === ''){
			setSearchResults([])
			setSearchInputInvalid(true)
			// setNoResultError(false)
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
// export default SearchInput;

function SearchInputWithGTMProvider(props) {
  return (
    <GTMProvider>
      <SearchInput {...props} />
    </GTMProvider>
  );
}

export default SearchInputWithGTMProvider;
