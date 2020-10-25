import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import PrismicComponent from "../../PrismicComponent";
import styled from "styled-components";
import Container from "../../Container";
import Divider from "../../Divider";

const Box = styled.div`
  & > * {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

const Intro = (props) => {
  
  if (!props) return;

  const { primary } = props;
  const { intro_description } = primary;

  return (
    <Section>
      <Container maxWidth={768}>
        <Box>
          {intro_description.map((item, idx) => (
            <PrismicComponent key={idx} item={item} />
          ))}
          <Divider />
        </Box>
      </Container>
    </Section>
  );
};

Intro.propTypes = {
  primary: PropTypes.object,
};

export default Intro;
