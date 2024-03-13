import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  font_weight?: string;
  heading_size?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  padding_left?: string;
  fontSize?: string;
  letterSpacing?: string;
}

// style={{font-weight: 700;}}>
const Headings = (props: HeadingProps) => {
  const conditionalStyle: React.CSSProperties = {};
  const size = props.heading_size ? props.heading_size : 1;
  if (props.font_weight && !isNaN(parseInt(props.font_weight)))
    conditionalStyle.fontWeight = parseInt(props.font_weight);
  if (props.padding_left) conditionalStyle.paddingLeft = props.padding_left;
  if (props.color) conditionalStyle.color = props.color;
  if (props.fontSize) conditionalStyle.fontSize = props.fontSize;
  if (props.letterSpacing) conditionalStyle.letterSpacing = props.letterSpacing;
  return (
    <>
      {React.createElement(
        `h${size}`,
        { style: conditionalStyle },
        props.children
      )}
    </>
  );
};

export default Headings;
