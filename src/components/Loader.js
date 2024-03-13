import {CircularProgress, Stack } from "@mui/material";

function Loader(){
    return <Stack direction='row' alignItems='center' m={2} spacing={3} justifyContent='center'>
        <CircularProgress />
        <h3>Generating People...</h3>
    </Stack>
}

export default Loader
