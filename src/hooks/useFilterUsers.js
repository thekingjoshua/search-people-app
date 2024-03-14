import { useState } from "react";

function useFilterUsers (users){
    const [searchValue, setSearchValue] = useState('');

    const filteredUsers = users.filter(
        user =>
          user.firstName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
          user.lastName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
          user.username.toLowerCase().includes(searchValue.toLocaleLowerCase())
      );

      return {filteredUsers, searchValue, setSearchValue}
} 

export default useFilterUsers