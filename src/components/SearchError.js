import { Card, CardContent } from "@mui/material"

function SearchError({errorText}){
    return <Card>
        <CardContent sx={{textAlign: 'center'}}><h1>{errorText}</h1></CardContent>
    </Card>
}

export default SearchError