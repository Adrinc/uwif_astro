import { sectionSEO } from "../constants";

export const GetSupportFull = (language:string) => {
    return  `
    query {
        pageSupport(locale:"${language}"){
          data{
            attributes{
              #------------------



              #------------------SupporSECCION
              
              Header{
                Headings{Heading}
                Textblock,
                Buttons{
                  Text,
                  Link
                }
              }
              
              #------------------ContactNumers
              
              ContactTitle,
              ContactBullets{
                Title,
                Content,
                
              }
              #------------------CommonQuestionsSeccion
              FAQTitle,
              FAQList{
                Title,
                Content
               
              }
              
              
            
            
            #------------------  
            ${sectionSEO}
            }
          }
        }
            
      }
          
          `
  };
