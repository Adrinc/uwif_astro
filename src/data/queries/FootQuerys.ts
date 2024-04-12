import { compIcon } from "../constants"

export const GetFootFull = () => {
    return  `

    query {

        generalFooter{
          data{
            attributes{

              
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
