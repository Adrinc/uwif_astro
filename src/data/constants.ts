export const strapiUrl = "https://strapi.u-wifi.cbluna-dev.com";
export const gqlURL = `${strapiUrl}/graphql`;

export const setURL = (url: string) => {
    return `${strapiUrl}${url}`;
};

export const mediaUrl = `
  data {
      attributes {
          url
          alternativeText
          caption
      }
  }
  `;

export const sectionSEO = `SEO{
    MetaTitle
    MetaDescription
    Keywords
    preventIndexing
    Schema
  }`;

  export const compIcon = `
    Icon{
        data{
            attributes{
                url
            }
        }
    }
  `;

  export const compButton = `
  Text
  Link
  ${compIcon}
  `;

