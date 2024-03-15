import Loader from "./Loader"
import SearchTable from "./SearchTable"

function Main ({isLoading, result}){
    if(isLoading){
        return <Loader/>
    } else {
        return <SearchTable selectedArray={result} />
    }
} 

export default Main