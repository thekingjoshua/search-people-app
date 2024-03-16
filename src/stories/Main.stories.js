import React from "react";
import Main from "../components/Main";
import { Paper, TableContainer } from "@mui/material";
import { ColorTheme } from "../components/ui/theme";

export default {
    title: "COMPONENTS/SearchTable",
    component: Main
}


const dummyUsersArr = [
    {
        "firstName": "Gary",
        "lastName": "Thomas",
        "username": "G.Thomas"
    },
    {
        "firstName": "Diana",
        "lastName": "Sanders",
        "username": "D.Sanders"
    },
    {
        "firstName": "Amanda",
        "lastName": "Peterson",
        "username": "A.Peterson"
    },
    {
        "firstName": "David",
        "lastName": "Mitchell",
        "username": "D.Mitchell"
    },
    {
        "firstName": "Jeffrey",
        "lastName": "Rogers",
        "username": "J.Rogers"
    }
]

export function DefaultSearchTable() {
    return <TableContainer component={Paper} sx={{ mt: 5, backgroundColor: ColorTheme.default['base'] }}>
            <Main isLoading={false} result={dummyUsersArr} />
        </TableContainer>

}