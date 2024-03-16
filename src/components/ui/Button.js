import { Button as MuiButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useGTMDispatch, GTMProvider } from '@elgorditosalsero/react-gtm-hook';


function Button ({searchInputValue, setSearchInputInvalid, users, setSearchResults, searchResults, setNoResultError, disabled}) {
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [searchNumber, setSearchNumber] = useState(0);
    // const [foundSearchMatch, setFoundSearchMatch] = useState(false);

	const gtmDispatch = useGTMDispatch();

    useEffect(() => {
        if (searchPerformed && searchInputValue !== '' && searchResults.length === 0) {
            setNoResultError(true);
        } else {
            setNoResultError(false);
        }
    }, [searchPerformed, searchInputValue, searchResults, setNoResultError]);

    const handleSearch = () => {
        setSearchInputInvalid(searchInputValue === '' ? true : false);
        setSearchNumber(prevNum => prevNum + 1)

        const searchValueLowerCased = searchInputValue.toLowerCase();
        const filteredUsers = users.filter( 
              user => ['firstName', 'lastName', 'username'].some(userKey => 
                  user[userKey].toLowerCase().includes(searchValueLowerCased))
        ); 
        gtmDispatch({
			event: 'search_query_and_num',
			searchQuery: searchInputValue,
            numOfSearches: searchNumber + 1,
            foundResult: filteredUsers.length > 0 ? 'yes' : 'no'
		  });

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
