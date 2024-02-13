


//export query
export const GetHeroVideo = () => {
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