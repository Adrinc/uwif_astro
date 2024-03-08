import { sectionSEO } from "../constants"

export const TermsAndConditionsQuery=()=>{
    return `query{
        pageTermsAndCond{
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