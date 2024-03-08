import { sectionSEO } from "../constants";

export const GetSupportFull = () => {
    return  `
    query {
        pageSupport{
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
