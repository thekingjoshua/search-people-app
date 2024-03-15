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
        setSearchPerformed(false);
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

    return <MuiButton onClick={handleSearch} id="searchBtn" variant="contained" disabled={disabled}>Search</MuiButton>;
}

export default Button;



// import { Button as MuiButton } from "@mui/material";
// import { useEffect, useState } from "react";

// function Button ({searchInputValue, setSearchInputInvalid, users, setSearchResults, searchResults, setNoResultError, disabled}) {
//     const [searchPerformed, setSearchPerformed] = useState(false);

//     useEffect(() => {
//         if (searchPerformed && searchInputValue !== '' && searchResults.length === 0) {
//             setNoResultError(true);
//         } else {
//             setNoResultError(false);
//         }
//     }, [searchPerformed, searchInputValue, searchResults, setNoResultError]);

//     const handleSearch = () => {
//         setSearchInputInvalid(searchInputValue === '' ? true : false);
 
//         const searchValueLowerCased = searchInputValue.toLowerCase();
//         const filteredUsers = users.filter( 
//               user => ['firstName', 'lastName', 'username'].some(userKey => 
//                   user[userKey].toLowerCase().includes(searchValueLowerCased))
//         ); 
//         setSearchResults(filteredUsers);
//         setSearchPerformed(true); // Set searchPerformed to true after search
//     };

//     return <MuiButton onClick={handleSearch} id="searchBtn" variant="contained" disabled={disabled}>Search</MuiButton>;
// }

// export default Button;



// // import { Button as MuiButton } from "@mui/material"
// // import { useEffect, useCallback } from "react";

// // function Button ({searchInputValue, setSearchInputInvalid, users, setSearchResults, searchResults, setNoResultError, disabled}) {

// //     const handleSearch = useCallback(() => {
// //         setSearchInputInvalid(searchInputValue === '' ? true : false)
 
// //         const searchValueLowerCased = searchInputValue.toLowerCase();

// //         const filteredUsers = users.filter( 
// //               user => ['firstName', 'lastName', 'username'].some(userKey => 
// //                   user[userKey].toLowerCase().includes(searchValueLowerCased))
// //         ); 

// //         setSearchResults(filteredUsers);
// //     }, [searchInputValue, setSearchInputInvalid, setSearchResults, users]);

// //     useEffect(() => {
// //         // Check if searchInputValue is empty and searchResults is empty after search
// //         if (searchInputValue === '' && searchResults.length === 0) {
// //             setNoResultError(true); // Set error if no results found
// //             console.log('firing')
// //         } else {
// //             setNoResultError(false); // Clear error if results found
// //         }
// //     }, [searchInputValue, searchResults, setNoResultError]); // Add searchInputValue as dependency

// //     return <MuiButton onClick={handleSearch} id="searchBtn" variant="contained" disabled={disabled}>Search</MuiButton> 
// // }

// // export default Button;


// // import { Button as MuiButton } from "@mui/material"
// // import { useEffect, } from "react";

// // function Button ({searchInputValue, setSearchInputInvalid, users, setSearchResults, searchResults, setNoResultError, disabled}) {
    
// //     useEffect(() => {
// //         if (searchInputValue !== '' && searchResults.length > 0) {
// //             setNoResultError(true);
// //             console.log('firing');
// //         } else {
// //             setNoResultError(false);
// //         }
// //     }, [searchResults, setNoResultError, searchInputValue]);       

// //     function handleSearch(){
// //         setSearchInputInvalid(searchInputValue === '' ? true : false)
 
// //         const searchValueLowerCased = searchInputValue.toLowerCase();

// //         const filteredUsers = users.filter( 
// //               user => ['firstName', 'lastName', 'username'].some(userKey => 
// //                   user[userKey].toLowerCase().includes(searchValueLowerCased))
// //             ); 
    
// //             setSearchResults(filteredUsers)
// //         }

// //     return <MuiButton onClick={handleSearch} id="searchBtn" variant="contained" disabled={disabled}>Search</MuiButton> 
// // }

// // export default Button

