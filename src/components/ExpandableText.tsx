import React, { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChar) return <div>{children}</div>;
  else
    return (
      <div>
        {isExpanded ? children : children.substring(0, maxChar) + "....."}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>{" "}
      </div>
    );
};

export default ExpandableText;
