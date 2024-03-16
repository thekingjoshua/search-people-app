import React from "react";
import SearchInputError from "../components/SearchInputError";

export default {
    title: 'UI/Typography',
    component: SearchInputError
} 

export function SearchInputErrorTypo () {
    return <SearchInputError searchInputInvalid={true}/>
}