import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import PrismicComponent from "../../PrismicComponent";
import Container from "../../Container";

const Youtube = (props) => {
  
  if (!props) return;

  const { primary } = props;

  const { youtube_video_id: video } = primary;

  return (
    <Section>
      <Container maxWidth={768}>
        {video &&
          video.map((item, idx) => <PrismicComponent key={idx} item={item} />)}
      </Container>
    </Section>
  );
};

Youtube.propTypes = {
  primary: PropTypes.any,
};

export default Youtube;
