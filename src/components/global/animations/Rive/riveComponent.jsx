import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const RiveElement = (props) => {
  const { src, stateMachines, autoplay, artboard } = props;
  const { RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachines?? null,
    artboard: artboard ?? null,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: autoplay,
  });

  return <RiveComponent />;
};

export default function Animation(props) {
  const { src, stateMachines, autoplay, artboard } = props;
  return (
    <RiveElement src={src} stateMachines={stateMachines} autoplay={autoplay} artboard={artboard}/>
  );
}