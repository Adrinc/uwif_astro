export const GetAboutFull = () => {
    return  `
    
    
    query {

        pageAboutUs{
          data{
            attributes{
              #------------------
              #------------------HeroAbout
              
              Header{
                Textblock,
                Headings{
                  Heading
                },
                Buttons{
                  Link,
                  Text
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
              
              #------------------BanerSuccesNumbers
              NumbersTitle,
              NumbersBullets{
                Icon{
                  data{
                    attributes{
                      alternativeText,
                      url
                    }
                  }
                },
                Title,
                Content
              }
              
              #------------------AboutUSeccion (ACTUALIZAR)
              AboutParagraphs{
                Headings{Heading},
                Textblock,
                
              }
              
              
              #------------------MeetOurSeccion
              
              
              
              #------------------OurDifferentialsSeccion
              
              ProsTitle,
              ProsBullets{
                Icon{
                  data{
                    attributes{
                      alternativeText,
                      url
                    }
                  }
                }
                Title,
                Subtitle,
                Content
              }
              GenParagraph{
                Headings{Heading},
                Buttons{
                  Text,
                  Link
                }
              }
              
              #------------------BanerJoinOurTeam
              JoinTeamParagraph{
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
              
            #------------------  
            }
          }
        }
            
      }
      
          `
  }
