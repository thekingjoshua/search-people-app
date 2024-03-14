import { Container, Paper, TableContainer } from '@mui/material';
import people from 'randomized-people';

import SearchInput from './components/SearchInput';
import SearchError from './components/SearchError';
import SearchTable from './components/SearchTable';
import Loader from './components/Loader';

import { ColorTheme } from './components/ui/theme';

import useFilterUsers from './hooks/useFilterUsers';
import { useMockAsync } from './hooks/useMockAsync';

const options = {
	amount: 10,
	gender: 'rnd',
	withPhoto: true,
};

const users = people(options)

function App() {
  const {newArr, searchValue, setSearchValue} = useFilterUsers(users)
  const {isLoading} = useMockAsync()
  const chooseArr = searchValue.length > 0 ? newArr : users

	return (
    <>
      <Container>
        <SearchInput setSearchValue={setSearchValue} searchValue={searchValue} disabled={isLoading} />
        <TableContainer component={Paper} sx={{ mt: 5, backgroundColor: ColorTheme.default['base'] }}>
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