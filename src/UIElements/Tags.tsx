import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const TagEl = styled.span`
  margin-left: 5px;
  background-color: var(--tag-bg);
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 2px;
  color: var(--tag-color);
  font-weight: 400;
`;

const Tag =  (props: Props) => {
  return <TagEl>{props.text}</TagEl>;
};

export default Tag;