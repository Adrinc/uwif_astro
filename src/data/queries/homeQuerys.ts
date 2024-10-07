import { compIcon, mediaUrl, sectionSEO } from "../constants"


export const GetHeroSeccionFull = (language:string) => {
    return  `
    query {
        pageHome(locale:"${language}"){
          data{
            attributes{
              #-------------- 
              # HERO 1
              #-------------- 
              Title
        Slides{
          Background{
            ${mediaUrl}
          }
          TextBLogo
          Logo{
            ${mediaUrl}
          }
          TextALogo
        }
              HeroButtons{
                Text,
                Link
              }
              
              #-------------- 
              # HERO 2
              #-------------- 

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
                Buttons{
                  Text
                  Link
                }
              }
              
              PricingTable{
                Title
                Price
                Pricetime
                Subtitle
                Description
                Features{
                  Content
                },
                Buttons{
                  Text
                  Link
                }
              }

              PricingButtons{
                Titles{
                  Heading
                }
              
                Button{
                Text
                Link
              }
            }


              #--------------
              # ACP
              #--------------

              InstallSteps{
                ${compIcon}
                Title
                Content
              }

              ButtonBuyNow{
                Text
                Link
              }

              ${sectionSEO}
            }
          }
        }
      }
          
          `
  };

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