import { compIcon, mediaUrl } from "../constants"

export const GetHowItWorksSeccionFull = () => {
  return  `
  query {
      pageHiw{
        data{
          attributes{
              #--------------
            
              StepsTitles{
                Heading
              }
              Steps{
                ${compIcon}
                Content
              }
              StepsMedia{
                ${mediaUrl}
              }
              
              StepsButtons{
                Text,
                Link
              }
              
              #--------------
              
              AppParagraphs{
                
                
                Headings{
                  Heading
                }
                Textblock,
                Media{
                  ${mediaUrl}
                }
              }
              
              
              #--------------
              Banner{
                Title,
                Content,
                ${compIcon}
              }
              
              #--------------
              #GETAWAY (INCOMPLETE)
                
              #--------------
           
              GatewayParagraph{
                Textblock,
                Buttons{
                  Text,
                  Link
                },
                Headings{Heading},
            
              }
              #--------------
            
          }
        }
      }
    }
        
        `
}





export const GetHowItWorksSeccion = () => {
    return  `
    query {
        pageHiw{
          data{
            attributes{
              
              
              
                #--------------
              
                StepsTitles{
                  Heading
                }
                Steps{
                  
                  ${compIcon}
                  
                  Content
                }
                StepsMedia{
                  data{
                    attributes{
                      url,
                      alternativeText
                    }
                  }
                }
                
                StepsButtons{
                  Text,
                  Link
                }
                
                #--------------
                

              
              
            }
          }
        }
      }
          
          `
  }



  export const GetUWIFISeccion = () => {
    return  `
    query {
        pageHiw{
          data{
            attributes{
              
              
              #--------------
              AppParagraphs{
                
                
                Headings{
                  Heading
                }
                Textblock,
                Media{
                  ${mediaUrl}
                }
              }
              
              
              #--------------
              
    
              
            }
          }
        }
      }
          
          `
  }



  export const GetConectionSeccion = () => {
    return  `
    query {
        pageHiw{
          data{
            attributes{
              Banner{
                Title,
                Content,
                ${compIcon}
              }       
              #--------------              
            }
          }
        }
      }
          
          `
  }