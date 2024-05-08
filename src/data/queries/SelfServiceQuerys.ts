import { mediaUrl, sectionSEO } from "../constants"

export const GetSelfServiceFull = (language:string) => {
    return  `
    query {

        pageSelfServ(locale:"${language}"){
          data{
            attributes{
              #------------------
              #------------------HeroSelfServices
              
              Header{
                Textblock,
                Media{
                  ${mediaUrl}
                }
              }
              
              #------------------SimpleToolsSeccion
              
              Header{
                  Headings{Heading},
                Buttons{
                  Text,
                  Link
                }
              }
              
              #------------------SimpleToolsStartSeccion
              
                      AccountParagraph{
                Headings{Heading}
                Textblock,
                Buttons{
                  Text,
                  Link
                }
                
              }
              
              #------------------GetUwifiAppSeccion
              
              AppParagraph{
                Headings{Heading},
                Textblock,
                Buttons{
                  Text,
                  Link
                }
                Media{
                  ${mediaUrl}
                }
              }
              
              #------------------ReadyToPayBillSeccion (INCOMPLETO FALTA IMAGENES)
              
              BillParagraph{
                Headings{Heading},
                Media{
                  ${mediaUrl}
                }
                Buttons{
                  Text,
                  Link
                }
              }
              
              #------------------WatchHowToSeccion
              
              HowToParagraph{
                Headings{Heading},
                Textblock,
                Buttons{
                  Text,
                  Link
                }
                Media{
                  ${mediaUrl}
                }
              }
              
              #------------------FindOpenSeccion
              
              StoreParagraph
              {
                Headings{Heading},
                Textblock,
                Buttons
                {
                  Text,
                  Link
                }
                Media{
                  ${mediaUrl}
                }
              }
              
              
            #------------------ 
            ${sectionSEO} 
            }
          }
        }
      }
          `
  };
