import { sectionSEO } from "../constants"

export const TermsAndConditionsQuery=(language:string)=>{
    return `query{
        pageTermsAndCond(locale:"${language}"){
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