import { OutlinedInput } from '@mui/material';
import SearchIcon from './icons/SearchIcon';
import { ColorTheme, InputRadius } from './ui/theme';
import { useGTMDispatch, GTMProvider } from '@elgorditosalsero/react-gtm-hook'; // Import GTMProvider


function SearchInput({ setSearchValue, searchValue, disabled }) {
	const gtmDispatch = useGTMDispatch()
	function handleSearchValue(e) {
		setSearchValue(e.target.value);
		gtmDispatch({
			event: 'search',
			searchQuery: searchValue,
		  });
	}

	return (
		<OutlinedInput
		id="searchInput"
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



// Wrap the SearchInput component with GTMProvider
function SearchInputWithGTMProvider(props) {
  return (
    <GTMProvider>
      <SearchInput {...props} />
    </GTMProvider>
  );
}

export default SearchInputWithGTMProvider;
