import { ColorTheme } from "./ui/theme"

function SearchMatchError({text= 'No matches for search found'}){
    return <h1 style={{textAlign: 'center', color: ColorTheme.error['base']}} >{text}</h1>
}

export default SearchMatchError