import { compIcon, mediaUrl, sectionSEO } from "../constants"

export const GetAboutFull = () => {
    return  `query {
        pageAboutUs{
          data{
            attributes{
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
                  ${mediaUrl}
                }
              }
              
              #------------------BanerSuccesNumbers
              NumbersTitle,
              NumbersBullets{
                ${compIcon}
                Title
                Content
              }
              
              #------------------AboutUSeccion (ACTUALIZAR)
              AboutParagraphs{
                Headings{Heading}
                Textblock
                Media{
                  ${mediaUrl}
                }
              }
              
              
              #------------------MeetOurSeccion
              
              
              
              #------------------OurDifferentialsSeccion
              
              ProsTitle,
              ProsBullets{
                ${compIcon}
                Title
                Subtitle
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
                  ${mediaUrl}
                }

              }
              ${sectionSEO}
            }
          }
        }
            
      } `
  };
