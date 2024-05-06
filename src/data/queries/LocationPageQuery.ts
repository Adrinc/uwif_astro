export const LocationPagesQuery = () => {
    return `query{
        locations{
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