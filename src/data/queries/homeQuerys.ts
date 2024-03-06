import { compIcon, mediaUrl } from "../constants"




export const GetHeroSeccionFull = () => {
    return  `
    query {
        pageHome{
          data{
            attributes{
              #-------------- 
              # HERO 1
              #-------------- 
              HeroVideo{
                ${mediaUrl}
              }
              HeroButtons{
                Text,
                Link
              }
              
              #-------------- 
              # HERO 2
              #-------------- 

              MarqueeButton{
                Text,
                Link
              }
              PrimaryParagraph{
                Headings{
                  Heading
                }
                Textblock
                IconLogo{
                  ${mediaUrl}
                }
                Buttons{
                  Text
                  Link
                }
              }
            

              #-------------- 
              # BENTO
              #-------------- 

              
              BentoGrid{
                ${mediaUrl}
              }

              #--------------
              # JUST ONE PLAN
              #--------------


              PricingParagraph{
                Headings{
                  Heading
                }
                Textblock
              }
              
              PricingTable{
                Title
                Price
                Pricetime
                Subtitle
                Features{
                  Content
                },
                Buttons{
                  Text
                  Link
                }
              }

              #--------------
              # FREE TABLET
              #--------------
              TabletParagraph{
                Headings{Heading}
                Textblock
                Media{
                  ${mediaUrl}
                }
              }

              #--------------
              # ACP
              #--------------

              ACPParagraph{
                Headings{
                  Heading
                }

                Textblock

                Media{
                  ${mediaUrl}
                }

                Buttons{
                  Text
                  Link
                }
              }

              InstallSteps{
                ${compIcon}
                Title
                Content
              }
            }
          }
        }
      }
          
          `
  }

export const GetHero1Seccion = () => {
    return  `
    query {
        pageHome{
          data{
            attributes{
              HeroVideo{
                ${mediaUrl}
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
                    ${mediaUrl}
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
                      ${mediaUrl}
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
    ${mediaUrl}
  }
  
  
  Buttons{
    Text,
    Link
  }
}
        
        InstallSteps{
          ${compIcon}
          Title,
          Content
        }
            }
          }
        }
      }
    
    `
  }