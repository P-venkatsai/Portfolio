import { ReactNode, useState } from "react";
import "../App.css";

interface ListGroupProps {
  items: string[];
  onSelectItem?: (item: string) => void;
  backGroundColor?: string;
  color?: string;
  font_weight?: string;
  liClassName?: string;
  display?: string;
  alignment?: string;
  ulClassName?: string;
  displayBar?: boolean;
  defaultIndex?: number;
  children?: ReactNode[];
  hoover?: boolean;
}

function ListGroup(props: ListGroupProps) {
  // Hook
  let defaultIndexPriority = true;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hooveredIndex, setHooveredIndex] = useState(-1);

  const items = props.children ? props.children : props.items;

  const conditionalStyle: React.CSSProperties = {};

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

  let liClassName = props.liClassName
    ? ` ${props.liClassName}`
    : "list-group-item";

  let ulClassName = props.ulClassName ? ` ${props.ulClassName}` : "list-group";

  conditionalStyle.border = "0px";

  if (props.font_weight && !isNaN(parseInt(props.font_weight)))
    conditionalStyle.fontWeight = parseInt(props.font_weight);

  return (
    <>
      <ul className={ulClassName} id="listParentUl">
        {items.map((item, index) => (
          <li
            className={
              defaultIndexPriority
                ? index == props.defaultIndex || index == hooveredIndex
                  ? `${liClassName} active-color`
                  : `${liClassName}`
                : index == selectedIndex || index == hooveredIndex
                ? `${liClassName} active-color`
                : `${liClassName}`
            }
            style={conditionalStyle}
            key={index}
          >
            <div
              className="innerClass"
              onMouseEnter={() => props.hoover && setHooveredIndex(index)}
              onMouseLeave={() => props.hoover && setHooveredIndex(-1)}
              onClick={() => {
                defaultIndexPriority = false;
                setSelectedIndex(index);
                {
                  props.onSelectItem && props.onSelectItem(index.toString());
                }
              }}
            >
              {props.displayBar && (
                <div
                  className={
                    defaultIndexPriority
                      ? index == props.defaultIndex || index == hooveredIndex
                        ? `active-indicator-div`
                        : `indicator-div`
                      : index == selectedIndex || index == hooveredIndex
                      ? `active-indicator-div`
                      : `indicator-div`
                  }
                ></div>
              )}
              {item}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
