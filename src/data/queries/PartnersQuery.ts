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
            ${sectionSEO}
          }
        }
      }
      partnerCategories{
        data{
          attributes{
            Name
            partners{
              data{
                attributes{
                  Name
                  Slug
                  Logo{
                    ${mediaUrl}
                  }
                }
              }
            }
          }
        }
      }
    }
`
  };