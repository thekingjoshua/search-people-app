import { Button as MuiButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useGTMDispatch, GTMProvider } from '@elgorditosalsero/react-gtm-hook';


function Button ({searchInputValue, setSearchInputInvalid, users, setSearchResults, searchResults, setNoResultError, disabled}) {
    const [searchPerformed, setSearchPerformed] = useState(false);
	const gtmDispatch = useGTMDispatch();
    let search_num = 0;

    useEffect(() => {
        if (searchPerformed && searchInputValue !== '' && searchResults.length === 0) {
            setNoResultError(true);
        } else {
            setNoResultError(false);
        }
    }, [searchPerformed, searchInputValue, searchResults, setNoResultError]);

    const handleSearch = () => {
        setSearchInputInvalid(searchInputValue === '' ? true : false);
        gtmDispatch({
			event: 'search',
			searchQuery: searchInputValue,
		  });

        gtmDispatch({
			event: 'num_search_event',
			searchQuery: search_num++,
		  });

        const searchValueLowerCased = searchInputValue.toLowerCase();
        const filteredUsers = users.filter( 
              user => ['firstName', 'lastName', 'username'].some(userKey => 
                  user[userKey].toLowerCase().includes(searchValueLowerCased))
        ); 
        setSearchResults(filteredUsers);
        setSearchPerformed(true);
    };

    useEffect(() => {
        setSearchPerformed(false);
    }, [searchInputValue]);

    return <MuiButton onClick={handleSearch} id="searchBtn" variant="contained" disabled={disabled}>Search</MuiButton>;
}




function ButtonWithGTMProvider(props) {
    return (
      <GTMProvider>
        <Button {...props} />
      </GTMProvider>
    );
  }
  
  export default ButtonWithGTMProvider;
