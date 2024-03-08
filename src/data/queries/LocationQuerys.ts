import { mediaUrl, sectionSEO } from "../constants"

export const LocationQuery = () => {
    return  `query{
        sectionLocationsConst{
          data{
            attributes{
                 Title
              CallButton{
                Text
                Link
              }
              
              PricingButtons{
                Titles{
                  Heading
                }
                
                Button{
                  Text
                  Link
                }
              }
              
              Features{
                Heading
              }
              
              FeaturesButton{
                Text
                Link
              }
              
              InstallParagraph{
                Headings{
                  Heading
                }
                Textblock
                Media{
                 ${mediaUrl}
                }
              }
              
              StepsBullets{
                Title
                Subtitle
              }
              
             ${sectionSEO}
            }
          }
        }
      }`
  };
