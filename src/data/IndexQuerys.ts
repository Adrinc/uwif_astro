


//export query
export const GetHero1Seccion = () => {
  return  `
query {
  uwifiHome{
    data{
      attributes{
        HeroButtons{
          Text,
          Link
        }
        HeroVideo{
          data{
            attributes{
              url,
              name
            }
          }
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