


//export query
export const GetHero1Seccion = () => {
    return  `
    query {
        pageHome{
          data{
            attributes{



              
              
              HeroVideo{
                data{
                  attributes{
                    name,
                    url
                  }
                }
              }
              HeroButtons{
                Text,
                Link
              }
              
              



            }
          }
        }
      }
          
          `
  }
  
  export const GetHero2Seccion = () => {
  return `
    query {
        pageHome{
          data{
            attributes{


      
                MarqueeButton{
                  Text,
                  Link
                }
                PrimaryParagraph{
                  Headings{
                    Heading
                  }
                  Textblock
                }
              
   


            }
          }
        }
      }
          
  `
  }



  export const GetBentoSeccion = () => {
    return `
    query {
        pageHome{
          data{
            attributes{


                BentoGrid{
                    data{
                      attributes{
                        name,
                        url,
                        width,
                        height
                      }
                    }
                  }
   


            }
          }
        }
      }
    
    `
  }



  
  export const GetJustOnePlanSeccion = () => {
    return `
    query {
        pageHome{
          data{
            attributes{


                PricingParagraph{
                    Headings{
                      Heading
                    }
                    Textblock
                  }
                  
                  PricingTable{
                    Title,
                    Price,
                    Pricetime,
                    Subtitle,
                    Features{
                      Content,
                    },
                    Buttons{
                      Text
                      Link
                    }
                  }
   


            }
          }
        }
      }
    
    `
  }
  export const GetFreeTabletSeccion = () => {
    return `
    query {
        pageHome{
          data{
            attributes{

                TabletParagraph{
                    Headings{Heading},
                    Textblock,
                    Media{
                      data{
                        attributes{
                          alternativeText,
                          name,
                          url
                        }
                      }
                    }
                  
                  }
                     
   


            }
          }
        }
      }
    
    `
  }


  export const GetACPSeccion = () => {
    return `
    query {
        pageHome{
          data{
            attributes{


 ACPParagraph{
  Headings{
    Heading
  }
  Textblock,
  
  
  Media{
    data{
      attributes{
        name,
        alternativeText,
        url
      }
    }
  }
  
  
  Buttons{
    Text,
    Link
  }
}
        
        InstallSteps{
          Icon{
            data{
              attributes{
                alternativeText,
                name,
                url
              }
            }
          }
          Title,
        }
        


            }
          }
        }
      }
    
    `
  }