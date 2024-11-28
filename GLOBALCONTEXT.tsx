import { createContext } from "react";

export type AppliedFiltersContex = 
{
    appliedFilters : string[],
    setFilters : React.Dispatch<React.SetStateAction<string[]>>
}

export const AppliedFiltersContexEvents =
{
    onFiltersApplied : 'onFiltersApplied'
}

export const AppliedFilters = createContext<AppliedFiltersContex>({ appliedFilters: [], setFilters: ()=>{} });