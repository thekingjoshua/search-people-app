import { useState } from 'react';
import { Container } from '@mui/system';
import people from 'randomized-people';

import SearchInput from './components/ui/SearchInput';
import SearchError from './components/SearchError';
import SearchTable from './components/SearchTable';

const options = {
	amount: 10,
	gender: 'rnd',
	withPhoto: true,
};
const users = people(options)

function App() {
	const [searchValue, setSearchValue] = useState('');


  const newArr = users.filter(
    user =>
      user.firstName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      user.lastName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      user.username.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  const chooseArr = searchValue.length > 0 ? newArr : users

	return (
		<Container>
			<SearchInput setSearchValue={setSearchValue} searchValue={searchValue} />
      {chooseArr.length <= 0 ? <SearchError errorText="Search value not found" />: <SearchTable chooseArr={chooseArr}/>}
		</Container>
	);
}

export default App;
