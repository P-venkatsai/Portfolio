interface SvgProps {
  xmlns?: string;
  onSelectItem?: (item: string) => void;
  backGroundColor?: string;
  fill?: string;
  font_weight?: string;
  className?: string;
  display?: string;
  alignment?: string;
  height?: string;
  path?: string;
  viewBox?: string;
  ariaHidden?: string;
}

const Svg = (props: SvgProps) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const viewBox = "0 0 16 16";
  const fill = "currentColor";
  const className = "h-6 w-6";
  return (
    <svg
      xmlns={props.xmlns ? props.xmlns : xmlns}
      viewBox={props.viewBox ? props.viewBox : viewBox}
      fill={props.fill ? props.fill : fill}
      className={props.className ? props.className : className}
      style={props.height ? { height: props.height } : { height: "1.6rem" }}
      aria-hidden={props.ariaHidden ? "false" : "true"}
      onClick={() =>
        props.onSelectItem ? props.onSelectItem("hi") : undefined
      }
      onTouchStart={(e) => {
        e.preventDefault();
      }}
    >
      {props.path && (
        <path d={props.path} onClick={(e) => e.preventDefault()}></path>
      )}
    </svg>
  );
};

export default Svg;
