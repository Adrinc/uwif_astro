import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const RiveElement = ({ src, stateMachines, autoplay, artboart }) => {
  const { RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachines,
    artboard: artboart,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: autoplay,
  });

  return <RiveComponent />;
};

export default function Animation({src, stateMachines, autoplay, artboart}) {
  // Definir las variables que quieres pasar al componente RiveElement
  // const src = "/rive/uwifilogo.riv";
  // const stateMachines = "uwifistart";
  // const autoplay = true;

  return (
    // Pasar las variables al componente RiveElement
    <RiveElement src={src} stateMachines={stateMachines} autoplay={autoplay} artboart={artboart}/>
  );
}
