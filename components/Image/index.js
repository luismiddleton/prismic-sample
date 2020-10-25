import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { border, layout, space } from "styled-system";

const StyledImage = styled.img`
  ${layout}
  ${border}
  ${space}
`;

const Image = ({ url, alt, width, height, borderRadius, centerAlign }) => {
  let alignProps;

  if (centerAlign) {
    alignProps = {
      display: "block",
      margin: "0 auto",
    };
  }
  return (
    <StyledImage
      src={url}
      alt={alt}
      title={alt}
      borderRadius={borderRadius}
      height={height}
      width={width}
      maxWidth={"100%"}
      {...alignProps}
    />
  );
};

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  borderRadius: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
};

export default Image;
