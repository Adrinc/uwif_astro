import { gqlURL } from "../data/constants";
import { MenuQuery } from "../data/queries/LayoutQuery";

export async function GQLQuery (query:string) {
    const resp  = await fetch(gqlURL,{
        method:"POST",
        cache:"no-cache",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({query}),
    })
    return await resp.json();
}
export async function getPageData(query:string, getLayoutData:boolean=true){
    let layoutData ={};
    if(getLayoutData){
        layoutData = await GQLQuery(MenuQuery());
    }

    const pageData = await GQLQuery(query);

    return {
        layoutData,
        pageData
    }
}
export async function getPageHomeData(query:string){

    const pageHome = await GQLQuery(query);

    return {

        pageHome
    }
}