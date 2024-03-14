import { ColorTheme } from "./ui/theme"

function SearchError({errorText}){
    return <h1 style={{textAlign: 'center', color: ColorTheme.error['base']}} >{errorText}</h1>
}

export default SearchError