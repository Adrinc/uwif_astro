import {mediaUrl, sectionSEO } from "../constants"

export const partnersQuery = (language:string) => {
    return  `
    query queryPartners {
        pagePartner(locale:"${language}"){
          data{
            attributes{
              HeaderParagraph{
                Headings{
                  Heading
                }
                Textblock
                Buttons{
                  Text
                  Link
                }
              }
              SegPartners{
                Titles{
                  Heading
                }
                Buttons{
                  Text
                  Link
                  Icon{
                    ${mediaUrl}
                  }
                }
              }
              ${sectionSEO}
            }
          }
        }
      }
`
  };