import { compIcon, mediaUrl } from "../constants";

export const LayoutQuery = (language: string) => {
  return `query{
      generalMenu(locale:"${language}"){
        data{
          attributes{
            Logo{
              Text
              Link
              Icon{
                ${mediaUrl}
              }
            }
            
            ContactOptions{
              Text
              Link
            }
            
            MenuOptions{
              Text
              Link
              SubOptions{
                Text
                Link
              }
            }
            
            FeatButton{
              Text
              Link
            }
          }
        }
      }
      generalFooter(locale:"${language}"){
        data{
          attributes{

            Logo{
              Link
              Icon{
                ${mediaUrl}
              }
            }
            #----------------
            Slogan,
            Button{
              Text,
              Link,
              ${compIcon}
            }
            
            
            TextButton{
              Text,
              Link,
              ${compIcon}
            }
            
            
            SocialMedia{
                Text,
                Link,
                ${compIcon}
              }
            Caption
            
            #----------------
          }
        }
      }
      }
      `};