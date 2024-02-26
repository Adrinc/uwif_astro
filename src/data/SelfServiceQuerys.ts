export const GetSelfServiceFull = () => {
    return  `
    query {

        pageSelfServ{
          data{
            attributes{
              #------------------
              #------------------HeroSelfServices
              
              Header{
                Textblock,
                Media{
                  data{
                    attributes{
                      alternativeText,
                      url
                    }
                  }
                }
              }
              
              #------------------SimpleToolsSeccion
              
              Header{
                  Headings{Heading},
                Buttons{
                  Text,
                  Link
                }
              }
              
              #------------------SimpleToolsStartSeccion
              
                      AccountParagraph{
                Headings{Heading}
                Textblock,
                Buttons{
                  Text,
                  Link
                }
                
              }
              
              #------------------GetUwifiAppSeccion
              
              AppParagraph{
                Headings{Heading},
                Textblock,
                Buttons{
                  Text,
                  Link
                }
                Media{
                  data{
                    attributes{
                      alternativeText,
                      url
                    }
                  }
                }
              }
              
              #------------------ReadyToPayBillSeccion (INCOMPLETO FALTA IMAGENES)
              
              BillParagraph{
                Headings{Heading},
                Media{
                  data{
                    attributes{
                      url,
                      alternativeText
                    }
                  }
                }
                Buttons{
                  Text,
                  Link
                }
              }
              
              #------------------WatchHowToSeccion
              
              HowToParagraph{
                Headings{Heading},
                Textblock,
                Buttons{
                  Text,
                  Link
                }
                Media{
                  data{
                    attributes{
                      url,
                      alternativeText
                    }
                  }
                }
              }
              
              #------------------FindOpenSeccion
              
              StoreParagraph
              {
                Headings{Heading},
                Textblock,
                Buttons
                {
                  Text,
                  Link
                }
                Media
                {
                  data
                  {
                    attributes
                    {
                      url,
                      alternativeText
                    }
                  }
                }
              }
              
              
            #------------------  
            }
          }
        }
      }
          `
  }
