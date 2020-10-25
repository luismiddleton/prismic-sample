import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "../styled/container";

const Container = (props) => {

  if (!props) return;

  const { children, maxWidth, margin } = props;

  return (
    <StyledContainer m={margin} maxWidth={maxWidth}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  margin: PropTypes.any
};

Container.defaultProps = {
  maxWidth: [768, 1281],
  margin: [0, "auto"],
};

export default Container;
