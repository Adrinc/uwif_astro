import { compIcon, mediaUrl, sectionSEO } from "../constants"

export const freeUQuery = (language:string) => {
    return  `
    query pageFreeU {
        pageFreeU(locale:"${language}"){
          data{
            attributes{
                Introduction{
                    Headings{
                        Heading
                    }
                    Textblock
                }
            
                Carousel{
                    ${mediaUrl}
                }

                Steps{
                    Title
                    ${compIcon}
                }

                Video{
                    ${mediaUrl}
                }

              ${sectionSEO}
            }
          }
        }
      }
`
  };