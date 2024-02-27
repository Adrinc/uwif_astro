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
                Icon{
                  data{
                    attributes{
                      url,
                      alternativeText
                    }
                  }
                }
              }
              
              
              SocialMedia{
                  Text,
                  Link,
                    Icon{
                      data{
                        attributes{
                          alternativeText,
                          url
                        }
                      }
                    }
                }
              
              
              #----------------
            }
          }
        }
              
              
           
      }
      

    `
}
