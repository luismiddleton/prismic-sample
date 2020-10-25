import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import Container from "../../Container";
import { StyledBlockQuote } from "../../styled/blockquote";

const Blockquote = (props) => {
  if (!props) return;

  const { primary } = props;
  const { quote } = primary;

  return (
    <>
      {quote && (
        <Section>
          <Container maxWidth={[768, 1080]}>
            <StyledBlockQuote>{quote}</StyledBlockQuote>
          </Container>
        </Section>
      )}
    </>
  );
};

Blockquote.propTypes = {
  primary: PropTypes.object,
};

export default Blockquote;
