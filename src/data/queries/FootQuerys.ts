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
                Link
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
              
              
              #----------------
            }
          }
        }
              
              
           
      }
      

    `
}
