import { Button as MuiButton } from "@mui/material";
import { useEffect, useState } from "react";

function Button ({searchInputValue, setSearchInputInvalid, users, setSearchResults, searchResults, setNoResultError, disabled}) {
    const [searchPerformed, setSearchPerformed] = useState(false);

    useEffect(() => {
        if (searchPerformed && searchInputValue !== '' && searchResults.length === 0) {
            setNoResultError(true);
        } else {
            setNoResultError(false);
        }
    }, [searchPerformed, searchInputValue, searchResults, setNoResultError]);

    const handleSearch = () => {
        setSearchInputInvalid(searchInputValue === '' ? true : false);
 
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



export default Button;
