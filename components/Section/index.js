import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, layout, background } from "styled-system";

const StyledSection = styled.section`
  ${space}
  ${layout}
  ${background}
  ${(props) => props.background && "color: white;"}
`;

const Section = (props) => {
  if (!props) return;

  const { children, background, backgroundUrl, height, pt, pb, pl, pr } = props;

  let backgroundProps = {
    background,
  };

  if (backgroundUrl) {
    backgroundProps = {
      ...backgroundProps,
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  return (
    <StyledSection
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      {...backgroundProps}
      minHeight={height}
    >
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  backgroundUrl: PropTypes.string,
  height: PropTypes.number,
};

Section.defaultProps = {
  pt: 5,
  pb: 5,
  pl: 3,
  pr: 3,
};

export default Section;
