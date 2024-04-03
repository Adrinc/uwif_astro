import {mediaUrl, sectionSEO } from "../constants"

export const partnersQuery = () => {
    return  `
    query queryPartners {
        pagePartner{
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