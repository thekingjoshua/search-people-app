import { ColorTheme } from "./ui/theme"

function SearchError({text}){
    return <h1 style={{textAlign: 'center', color: ColorTheme.error['base']}} >{text}</h1>
}

export default SearchError