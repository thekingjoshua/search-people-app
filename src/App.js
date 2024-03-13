import { useState, useEffect } from 'react';
import { Container } from '@mui/system';
import people from 'randomized-people';
import SearchInput from './components/ui/SearchInput';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

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
			<TableContainer component={Paper} sx={{ mt: 5, backgroundColor: '#F2F4F6' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>S/N</TableCell>
							<TableCell>First Name</TableCell>
							<TableCell>Last Name</TableCell>
							<TableCell>Username</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{chooseArr.map((user, i) => (
							<TableRow key={i}>
								<TableCell>{i + 1}.</TableCell>
								<TableCell>{user.firstName}</TableCell>
								<TableCell>{user.lastName}</TableCell>
								<TableCell>{user.username}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}

export default App;
