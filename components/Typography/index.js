import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ComponentTypes } from "../../constants/types";
import { space, typography } from "styled-system";

const { PARAGRAPH, HEADING_THREE, HEADING_TWO, HEADING_ONE } = ComponentTypes;

const HeadingOne = styled.h1`
  ${typography}
  ${(props) => props.align && `text-align: ${props.align}`}
`;

const HeadingTwo = styled.h2`
  ${typography}
  ${space}
  ${(props) => props.align && `text-align: ${props.align}`}
`;

const HeadingThree = styled.h3`
  ${typography}
  ${space}
  ${(props) => props.align && `text-align: ${props.align}`}
`;

const Paragraph = styled.p`
  ${typography}
  ${(props) => props.align && `text-align: ${props.align}`}
`;

const Typography = (props) => {
  if (!props) return;

  const { text, children, type, align } = props;

  if (type === PARAGRAPH) {
    return (
      <Paragraph align={align} lineHeight={1.4}>
        {text || children}
      </Paragraph>
    );
  }

  if (type === HEADING_ONE) {
    return (
      <HeadingOne align={align} pb={4} pt={3} fontSize={6}>
        {text || children}
      </HeadingOne>
    );
  }

  if (type === HEADING_TWO) {
    return (
      <HeadingTwo align={align} pb={2} pt={2} fontSize={5}>
        {text || children}
      </HeadingTwo>
    );
  }

  if (type === HEADING_THREE) {
    return (
      <HeadingThree align={align} pb={2} pt={2} fontSize={4}>
        {text || children}
      </HeadingThree>
    );
  }

  return <div>{text || children}</div>;
};

Typography.propTypes = {
  text: PropTypes.string,
  align: PropTypes.oneOf(["center", "left", "right", ""]),
};

Typography.defaultProps = {
  text: "",
  align: "",
};

export default Typography;
