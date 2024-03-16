import React from 'react'
import ButtonWithGTMProvider from '../components/ui/Button'

export default {
    title: 'UI/Button',
    component: ButtonWithGTMProvider
}



export function defaultButton(){
    return <ButtonWithGTMProvider setNoResultError={()=> null} disabled={false}/>
}
export function disabledButton(){
    return <ButtonWithGTMProvider setNoResultError={()=> null} disabled={true}/>
}