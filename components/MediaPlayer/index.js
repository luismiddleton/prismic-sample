import React from "react";
import PropTypes from "prop-types";
import { StyledIframe } from "../styled/iframe";

const MediaPlayer = (props) => {
  const { oembed } = props;
  return (
    <>
      {oembed && (
        <StyledIframe dangerouslySetInnerHTML={{ __html: oembed.html }} />
      )}
    </>
  );
};

MediaPlayer.propTypes = {
  oembed: PropTypes.object,
};

MediaPlayer.defaultProps = {
  oembed: null,
};

export default MediaPlayer;
