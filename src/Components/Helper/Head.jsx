import React from "react";

export const Head = (props) => {
  React.useEffect(() => {
    document.title = ` Dogs | ${props.title}`;
  }, [props]);
  return <></>;
};
