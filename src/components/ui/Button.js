import { Button as MuiButton } from "@mui/material"
import { useEffect } from "react";

function Button ({searchInputValue, setSearchInputInvalid, users, setSearchResults, searchResults, setNoResultError, disabled}) {
    
    useEffect(() => {
        if (searchInputValue && searchResults.length === 0) {
            setNoResultError(true);
        } else {
            setNoResultError(false);
        }
    }, [searchResults, setNoResultError]);       

    function handleSearch(){
        setSearchInputInvalid(searchInputValue === '' ? true : false)
 
        const searchValueLowerCased = searchInputValue.toLowerCase();

        const filteredUsers = users.filter( 
              user => ['firstName', 'lastName', 'username'].some(userKey => 
                  user[userKey].toLowerCase().includes(searchValueLowerCased))
            ); 
    
            setSearchResults(filteredUsers)
        }

    return <MuiButton onClick={handleSearch} id="searchBtn" variant="contained" disabled={disabled}>Search</MuiButton> 
}

export default Button