import { useState, useMemo } from "react";

function useSearch (users){
    const [searchValue, setSearchValue] = useState('');
    const searchValueLowerCased = searchValue.toLowerCase();

    const filteredUsers = useMemo(() => {
        return users.filter( 
          user => ['firstName', 'lastName', 'username'].some(userKey => 
              user[userKey].toLowerCase().includes(searchValueLowerCased))
        ); 
      }, [users, searchValueLowerCased]) 

      return {filteredUsers, searchValue, setSearchValue}
} 

export default useSearch