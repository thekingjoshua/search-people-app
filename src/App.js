import { Container, Paper, Stack, TableContainer } from '@mui/material';
import people from 'randomized-people';

import Main from './components/Main';

import { ColorTheme } from './components/ui/theme';

import useGeneratePeople from './hooks/useGeneratePeople';
import {useState } from 'react';
import SearchInput from './components/SearchInput';
import ButtonWithGTMProvider from './components/ui/Button';
import SearchMatchError from './components/SearchMatchError';


const options = {
	amount: 100,
	gender: 'rnd',
};

const users = people(options);
console.log(users)
function App() {
  const [searchInputValue, setSearchInputValue] =  useState('');
  const [searchInputInvalid, setSearchInputInvalid] =  useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noResultError, setNoResultError] = useState(false)
  const {isLoading} = useGeneratePeople()
  
  const result = searchResults.length > 0 ? searchResults : users;

	return ( 
    <>
      <Container>
        <Stack direction="row"  alignItems="center" justifyContent='center' mt={5} gap={5} >
          <SearchInput 
          setSearchInputValue={setSearchInputValue}  
          setSearchInputInvalid={setSearchInputInvalid} 
          setSearchResults={setSearchResults} 
          setNoResultError={setNoResultError}
          searchInputInvalid={searchInputInvalid}
          disabled={isLoading}
          />
            <ButtonWithGTMProvider
              searchInputValue={searchInputValue} 
              setSearchInputInvalid={setSearchInputInvalid} 
              users={users} 
              setSearchResults={setSearchResults} 
              searchResults={searchResults} 
              setNoResultError={setNoResultError}
              disabled={isLoading}
              />
        </Stack>
        <TableContainer component={Paper} sx={{ mt: 5, backgroundColor: ColorTheme.default['base'] }}>
            {noResultError ? <SearchMatchError /> : <Main isLoading={isLoading} result={result}  />  }
        </TableContainer>
      </Container>
    </>
	);
}

export default App;
