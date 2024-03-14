import {Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

function SearchTable({selectedArray}) {
    return <Table>
        <TableHead>
            <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Username</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {selectedArray.map((user, i) => (
                <TableRow key={i}>
                    <TableCell>{i + 1}.</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.username}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}

export default SearchTable