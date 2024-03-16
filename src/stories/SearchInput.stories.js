import React from "react";
import SearchInput from "../components/SearchInput";

export default {
    title: 'COMPONENTS/SearchInput',
    component: SearchInput
}

export function DefaultInput() {
    return <SearchInput 
        setSearchInputValue={() => null} 
        setSearchInputInvalid={() => null} 
        setNoResultError={() => null} 
    />
}
export function DisabledInput() {
    return <SearchInput 
        disabled={true} 
        setSearchInputValue={() => null} 
        setSearchInputInvalid={() => null} 
        setNoResultError={() => null}
    />
}
export function ErrorInput() {
    return <SearchInput 
        searchInputInvalid={true} 
        setSearchInputValue={() => null} 
        setSearchInputInvalid={() => null} 
        setNoResultError={() => null}
    />
} 