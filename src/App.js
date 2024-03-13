import { useEffect, useState } from 'react';
import { Container, Paper, TableContainer } from '@mui/material';
import people from 'randomized-people';

import SearchInput from './components/SearchInput';
import SearchError from './components/SearchError';
import SearchTable from './components/SearchTable';
import Loader from './components/Loader';

const options = {
	amount: 10,
	gender: 'rnd',
	withPhoto: true,
};
const users = people(options)

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 2000)
  }, [])
  
  const newArr = users.filter(
    user =>
      user.firstName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      user.lastName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      user.username.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  const chooseArr = searchValue.length > 0 ? newArr : users

	return (
      <>
		<Container>
			<SearchInput setSearchValue={setSearchValue} searchValue={searchValue} disabled={isLoading} />
      <TableContainer component={Paper} sx={{ mt: 5, backgroundColor: '#F2F4F6' }}>
        {isLoading ? <Loader/> :  <Main chooseArr={chooseArr} />}
      </TableContainer>
		</Container>
      </>
	);
}

export default App;

function Main ({chooseArr}){
  return chooseArr.length <= 0 ? <SearchError errorText="Search value not found" />: <SearchTable chooseArr={chooseArr}/>
} 