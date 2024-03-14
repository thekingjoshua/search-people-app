import { useState, useMemo } from "react";

function useFilterUsers (users){
    const [searchValue, setSearchValue] = useState('');
    const searchValueLowerCase = searchValue.toLowerCase()

    const filteredUsers = useMemo(() => {
      return users.filter( user =>
          user.firstName.toLowerCase().includes(searchValueLowerCase) ||
          user.lastName.toLowerCase().includes(searchValueLowerCase) ||
          user.username.toLowerCase().includes(searchValueLowerCase)
      ); 
    }, [users, searchValue]) 


      return {filteredUsers, searchValue, setSearchValue}
} 

export default useFilterUsers