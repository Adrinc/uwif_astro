import { compIcon, mediaUrl, sectionSEO } from "../constants"

export const joinData = () => {
    return  `
    query pageLaunch {
        pagePreLaunch{
          data{
            attributes{
              Headings{
                Heading
              }
              Logo{
                ${mediaUrl}
              }
              Description
              RegisterForm{
                Description
                Inputs{
                  Label
                  Name
                  Pattern
                  Placeholder
                }
              }
              Buttons{
                Text
                Link
                ${compIcon}
              }
              Media{
                ${mediaUrl}
              }
              ${sectionSEO}
            }
          }
        }
      }
`
  }