import { compIcon, mediaUrl, sectionSEO } from "../constants"

export const joinQuery = () => {
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
                Button{
                  Text
                  Link
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
  };