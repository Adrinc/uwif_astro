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