import { compIcon, mediaUrl, sectionSEO } from "../constants"

export const GetHowItWorksSeccionFull = (language:string) => {
  return  `
  query {
      pageHiw(locale:"${language}"){
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

              InternetParagraph{
                Headings{
                  Heading
                }
                Textblock
                Media{
                  ${mediaUrl}
                }
              }
           
              GatewayParagraph{
                Textblock,
                Buttons{
                  Text,
                  Link
                },
                Headings{Heading},
            
              }
              #--------------
            ${sectionSEO}
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