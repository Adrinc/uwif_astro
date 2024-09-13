import { sectionSEO } from "../constants"

export const TransparencyQuery=(language:string)=>{
    return `query{
        pageTransparency(locale:"${language}"){
          data{
            attributes{
              Content{
                Headings{
                    Heading
                }
                Content
              }
              ${sectionSEO}
            }
          }
        }
      }` 
};