import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

function SearchTable({chooseArr}) {
    return <TableContainer component={Paper} sx={{ mt: 5, backgroundColor: '#F2F4F6' }}>
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
}

export default SearchTable