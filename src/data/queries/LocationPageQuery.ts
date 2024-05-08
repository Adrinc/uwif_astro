export const LocationPagesQuery = (language:string) => {
    return `query{
        locations(locale:"${language}"){
          data{
            attributes{
              Name
              Slug
              ShortDescription
              Introduction
            }
          }
        }
      }`
}