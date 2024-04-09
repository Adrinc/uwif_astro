
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const RiveDemo = ({route}) => {
  const test=route;

  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: test.toString(),
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: "Motion",
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.Contain  , // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};


export default function App({test}) {
  const ruta =test;
  return (   
      <RiveDemo route={ruta}/>
      );
    }
