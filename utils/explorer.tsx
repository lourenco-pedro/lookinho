import { d_categories, d_looks, Look } from "@/const/debug_backend";
import { ImageURISource, LogBox } from "react-native";

export type SearchElement =
{
    id: string
    name : string,
    img : ImageURISource[],
    description? : string
}

type ExplorerObject = 
{
    search : (tags : string[]) => SearchElement[]
};


var count : number = 0

export const explorer : ExplorerObject =
{
    search: (tags : string[]) : SearchElement[]=>
    {

        const start = performance.now();
        
        function looksWithTags(look : Look)
        {
            return look.category.some(cat => tags.some(t => t === cat));
            // return true;
        }
        
        const foundLooksWithTags = d_looks.filter(looksWithTags);
        const result : SearchElement[] = foundLooksWithTags.map(look => ({
            id: look.id,
            name: look.title,
            img: [ look.image ] ,
            description: look.description
        }))
        
        const end = performance.now();
        
        console.log('sarching ' + ( end - start ).toFixed(2) + 'ms');
        count++;

        return result;
    }
}