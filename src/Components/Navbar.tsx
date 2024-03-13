import { ReactNode, useState } from "react";
import "../App.css";

interface NavbarGroupProps {
  items?: string[];
  onSelectItem?: (item: string) => void;
  backGroundColor?: string;
  color?: string;
  font_weight?: string;
  className?: string;
  display?: string;
  alignment?: string;
  urls?: string[];
  children: ReactNode[];
}

const Navbar = (props: NavbarGroupProps) => {
  // items = props.items ? props.items : socialMediaIcons;

  const items = props.children.length ? props.children : [props.children];
  // items=items?items:[];
  const url = props.urls ? props.urls : [];
  const [hooveredIndex, setHooveredIndex] = useState(-1);
  let className = "nav-item" + (props.className ? ` ${props.className}` : "");
  const conditionalStyle: React.CSSProperties = {};
  const handleOnClickALink = (link: string) => {
    window.open(link, "_blank");
  };

  if (props.color) {
    conditionalStyle.color = props.color;
  }

  if (props.backGroundColor) {
    conditionalStyle.background = props.backGroundColor;
  }

  if (props.display) {
    conditionalStyle.display = props.display;
  }

  if (props.alignment) {
    conditionalStyle.alignItems = props.alignment;
  }

  conditionalStyle.paddingRight = "0.5rem";

  return (
    <>
      <ul className="list-inline">
        {items.map((item, index: number) => (
          <li
            className={
              index == hooveredIndex
                ? `${className} active-color`
                : `${className}`
            }
            style={conditionalStyle}
            key={index}
            onMouseEnter={() => setHooveredIndex(index)}
            onMouseLeave={() => setHooveredIndex(-1)}
            onClick={() => {
              {
                props.onSelectItem && props.onSelectItem(index.toString());
              }
            }}
          >
            <a
              className="nav-link"
              style={{ color: "inherit", cursor: "pointer" }}
              onClick={
                url && url.length > index
                  ? () => handleOnClickALink(url[index])
                  : undefined
              }
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
