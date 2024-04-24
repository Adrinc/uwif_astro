import { compIcon, mediaUrl } from "../constants"

export const GetFootFull = () => {
    return  `

    query {

        generalFooter{
          data{
            attributes{

              Logo{
                Link
                Icon{
                  ${mediaUrl}
                }
              }
              #----------------
              Slogan,
              Button{
                Text,
                Link,
                ${compIcon}
              }
              
              
              TextButton{
                Text,
                Link,
                ${compIcon}
              }
              
              
              SocialMedia{
                  Text,
                  Link,
                  ${compIcon}
                }
              Caption
              
              #----------------
            }
          }
        }
              
              
           
      }
      

    `
}
