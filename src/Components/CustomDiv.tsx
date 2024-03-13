import { useState } from "react";
import Headings from "./Headings";
import ListGroup from "./ListGroup";
import Svg from "./Svg";
import { REDIRECT_ICON } from "../Strings";

interface CustomDivProps {
  items?: string[];
  title?: string;
  subHeading1?: string;
  subHeading2?: string;
  description?: string;
  duration?: string;
  image?: string;
  notHighlightDiv?: boolean;
  company?: string;
  redirect?: string;
  info?: string;
}

const CustomDiv = (props: CustomDivProps) => {
  const [isMouseOnDiv, highlightDiv] = useState(false);
  const handleOnClickALink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="row customDivStyle"
      onMouseEnter={() => highlightDiv(true)}
      onMouseLeave={() => highlightDiv(false)}
      style={
        props.notHighlightDiv || !isMouseOnDiv
          ? {}
          : {
              backgroundColor: "rgba(55, 65, 81, 0.5)",
              boxShadow:
                "inset 0 1px 0 0 rgba(148, 163, 184, 0.1), 0 0 8px 4px rgba(55, 65, 81, 0.2)",
            }
      }
      onClick={() => {
        props.redirect && handleOnClickALink(props.redirect);
      }}
    >
      {(props.duration || props.image) && (
        <div
          className="col-12 col-md-3 text-xs headerImage"
          style={{ color: "rgb(100,116,139,1)", fontWeight: "600" }}
        >
          {!props.duration && props.image && (
            <img
              src={props.image}
              style={{ borderColor: "rgba(226,232,240,.1)" }}
              className="img-fluid rounded"
            ></img>
          )}
          {props.duration}
        </div>
      )}
      <div className=".col-12 col-md-8">
        <div className="headingOfDiv">
          <Headings
            heading_size={6}
            {...(isMouseOnDiv
              ? { color: "rgb(94, 234, 212)" }
              : { color: "rgb(226, 232, 240, 1)" })}
            font_weight="500"
          >
            {props.title}
            {props.company && ` · ${props.company}`}
            <Svg
              {...(isMouseOnDiv
                ? { className: "h-6 w-6 hoverIconStyle" }
                : { className: "h-6 w-6 defaultIconStyle" })}
              viewBox="0 0 16 16"
              height="0.75rem"
              path={REDIRECT_ICON}
            ></Svg>
          </Headings>
        </div>
        {props.subHeading1 && (
          <div style={{ marginTop: "-0.5rem", color: "rgb(100,116,139,1)" }}>
            Senior Engineer
          </div>
        )}
        {props.subHeading2 && (
          <div style={{ color: "rgb(100,116,139,1)" }}>Engineer</div>
        )}
        {props.description && <p className="mt-2 small">{props.description}</p>}
        {props.items && (
          <ListGroup
            items={props.items}
            liClassName="list-inline-item text-xs text-slate-500 skills"
            alignment="center"
            ulClassName="list-inline"
          ></ListGroup>
        )}
      </div>
      {props.image && (
        <div className="col-12 footerImage">
          {!props.duration && props.image && (
            <img
              src={props.image}
              style={{ borderColor: "rgba(226,232,240,.1)" }}
              className="img-fluid rounded"
            ></img>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDiv;
