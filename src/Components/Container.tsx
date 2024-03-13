import { ReactNode } from "react";
import "../App.css";

interface ContainerProps {
  width?: string;
  children?: ReactNode;
  display?: string;
  overflow?: string;
  className?: string;
  height?: string;
}

const Container = (props: ContainerProps) => {
  const conditionalStyle: React.CSSProperties = {};

  let className = props.className
    ? `container ${props.className}`
    : "container";

  if (props.display) {
    conditionalStyle.display = props.display;
  }

  if (props.width) {
    conditionalStyle.maxWidth = props.width;
    conditionalStyle.margin = "auto";
  }

  if (props.height) {
    conditionalStyle.height = props.height;
  }

  if (props.overflow) {
    conditionalStyle.overflow = props.overflow;
  }

  return (
    <div className={className} style={conditionalStyle}>
      {props.children}
    </div>
  );
};

export default Container;
