import { mediaUrl } from "../constants"



//export query
export const GetHero1Seccion = () => {
  return  `
query {
  uwifiHome{
    data{
      attributes{
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
      }
    }
  }
}
        
        `
}

export const GetHero2Seccion = () => {
return `
query {
  uwifiHome{
  	data{
      attributes{
        MarqueeButton{
          Text
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

export const GetJJustOnePlanSeccion = () => {
  return `
  query {
    uwifiHome{
      data {
        attributes{
          PricingParagraph{
            Headings{Heading}
          }
          PricingTable{
            Title
            Price
            Pricetime
            Subtitle
            Description
            Features{
              Title
              Content
            }
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