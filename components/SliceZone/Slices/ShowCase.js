import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import PrismicComponent from "../../PrismicComponent";
import Grid from "../../Grid";
import { StyledBlockQuote } from "../../styled/blockquote";
import Container from "../../Container";

const ShowCase = (props) => {
  
  if (!props) return;

  const { items, primary } = props;

  const {
    showcase_description,
    showcase_blockquote,
    showcase_blockquote_author,
  } = items[0];

  const { showcase_background_image, align_content } = primary;

  const { url } = showcase_background_image;

  return (
    <Section backgroundUrl={url} height={450}>
      <Container>
        <Grid gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
          <div className={align_content}>
            {showcase_description &&
              showcase_description.map((item, idx) => (
                <PrismicComponent key={idx} item={item} />
              ))}
            {showcase_blockquote && showcase_blockquote && (
              <StyledBlockQuote
                author={showcase_blockquote_author}
                hasBackground={Boolean(url)}
              >
                {showcase_blockquote}
              </StyledBlockQuote>
            )}
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

ShowCase.propTypes = {
  items: PropTypes.array,
  primary: PropTypes.any,
};

export default ShowCase;
