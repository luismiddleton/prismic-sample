import React from "react";
import PropTypes from "prop-types";
import { StyledDivider } from "../styled/divider";

const Divider = (props) => {
  if (!props) return;

  const { mt, mb, width, borderStyle, borderColor } = props;

  return (
    <StyledDivider
      mt={mt}
      mb={mb}
      width={width}
      borderStyle={borderStyle}
      borderColor={borderColor}
    />
  );
};

Divider.propTypes = {
  mt: PropTypes.any,
  mb: PropTypes.any,
  width: PropTypes.any,
  borderStyle: PropTypes.any,
  borderColor: PropTypes.any,
};

Divider.defaultProps = {
  mt: 2,
  mb: 2,
  width: "33.33%",
  borderStyle: "solid",
  borderColor: "#e6ebf0",
};

export default Divider;
