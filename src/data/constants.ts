export const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL;
export const gqlURL = `${strapiUrl}/graphql`;

export const setURL = (url: string) => {
    return `${strapiUrl}${url}`;
};
export let defaultLang = 'en';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang=="es") return 'es';
    return defaultLang;
  }

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

