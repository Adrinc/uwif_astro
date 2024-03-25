
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const RiveDemo = () => {
  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "/rive/uwifilogo.riv",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: "uwifistart",
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.Contain  , // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};


export default function Wifilogo() {
  return (
   
      <RiveDemo />
      
      );
    }
/* export default function Wifilogos() {
  return (
   

    <div style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
      );
    }
 */