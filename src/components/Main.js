import SearchError from "./SearchError"
import SearchTable from "./SearchTable"

function Main ({selectedArray}){
    return selectedArray.length <= 0 ? <SearchError text="Search value not found" />: <SearchTable selectedArray={selectedArray}/>
} 

export default Main