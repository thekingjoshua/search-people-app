import { Container, Paper, TableContainer } from '@mui/material';
import people from 'randomized-people';

import SearchInput from './components/SearchInput';
import Loader from './components/Loader';
import Main from './components/Main';

import { ColorTheme } from './components/ui/theme';

import useSearch from './hooks/useSearch';
import useGeneratePeople from './hooks/useGeneratePeople';

const options = {
	amount: 10,
	gender: 'rnd',
};

const users = people(options)

function App() {
  const {filteredUsers, searchValue, setSearchValue} = useSearch(users)
  const {isLoading} = useGeneratePeople()

  const selectedArray = searchValue.length > 0 ? filteredUsers : users

	return (
    <>
      <Container>
        <SearchInput setSearchValue={setSearchValue} searchValue={searchValue} disabled={isLoading} />
        <TableContainer component={Paper} sx={{ mt: 5, backgroundColor: ColorTheme.default['base'] }}>
          {isLoading ? <Loader/> :  <Main selectedArray={selectedArray} />}
        </TableContainer>
      </Container>
    </>
	);
}

export default App;

