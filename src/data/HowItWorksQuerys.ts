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
                  
                  Icon{
                    data{
                      attributes{
                        url,
                        alternativeText
                      }
                    }
                  }
                  
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
              
              
              
              AppParagraphs{
                
                
                Headings{
                  Heading
                }
                Textblock,
                Media{
                  data{
                    attributes{
                      alternativeText,
                      url
                    }
                  }
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
              
              
              
              
              #BANNER
              
              Banner{
                Title,
                Content,
                Icon{
                  data{
                    attributes{
                      url,
                      alternativeText
                    }
                  }
                }
              }
              
              #--------------
              
    
              
            }
          }
        }
      }
          
          `
  }