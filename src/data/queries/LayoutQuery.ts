import { mediaUrl } from "../constants";

export const MenuQuery=()=>{
    return `query{
      generalMenu{
        data{
          attributes{
            Logo{
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
      }
      `};