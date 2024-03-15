import { Container, Paper, Stack, TableContainer } from '@mui/material';
import people from 'randomized-people';

import Main from './components/Main';

import { ColorTheme } from './components/ui/theme';

import useGeneratePeople from './hooks/useGeneratePeople';
import Button from './components/ui/Button';
import { useState } from 'react';
import SearchInput from './components/SearchInput';
import SearchError from './components/SearchError';


const options = {
	amount: 5,
	gender: 'rnd',
};

const users = people(options)

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
          <Button 
            searchInputValue={searchInputValue} 
            setSearchInputInvalid={setSearchInputInvalid} 
            users={users} 
            setSearchResults={setSearchResults} 
            searchResults={searchResults} 
            setNoResultError={setNoResultError}
            disabled={isLoading}
            />
        </Stack>
          <p style={{color: ColorTheme.error['base']}}>
            {searchInputInvalid ? 'Search query is empty.' : '' } 
          </p>
        <TableContainer component={Paper} sx={{ mt: 5, backgroundColor: ColorTheme.default['base'] }}>
            {noResultError ? <SearchError text='Not found' /> : <Main isLoading={isLoading} result={result}  />  }
        </TableContainer>
      </Container>
    </>
	);
}

export default App;
