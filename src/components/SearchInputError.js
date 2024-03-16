import { ColorTheme } from "./ui/theme"

function SearchInputError({searchInputInvalid}) {
    return <p style={{color: ColorTheme.error['base']}}>
        {searchInputInvalid ? 'Search input is empty.' : '' } 
    </p>
}

export default SearchInputError