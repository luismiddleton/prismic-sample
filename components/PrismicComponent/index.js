import React from "react";
import PropTypes from "prop-types";
import { ComponentTypes } from "../../constants/types";
import Image from "../Image";
import Typography from "../Typography";
import MediaPlayer from "../MediaPlayer";

const {
  IMAGE,
  HEADING_FIVE,
  HEADING_ONE,
  HEADING_FOUR,
  HEADING_SIX,
  HEADING_THREE,
  HEADING_TWO,
  PARAGRAPH,
  EMBED
} = ComponentTypes;

const PrismicComponent = ({ item }) => {

  if (!item) return;

  switch (item.type) {
    case IMAGE:
      return <Image {...item} />;
      break;
    case HEADING_ONE:
      return <Typography {...item} />;
      break;
    case HEADING_TWO:
      return <Typography {...item} />;
      break;
    case HEADING_THREE:
      return <Typography {...item} />;
      break;
    case HEADING_FOUR:
      return <Typography {...item} />;
      break;
    case HEADING_FIVE:
      return <Typography {...item} />;
      break;
    case PARAGRAPH:
      return <Typography {...item} />;
      break;
    case EMBED:
      return <MediaPlayer {...item} />
    default:
      return;
      break;
  }
};

PrismicComponent.propTypes = {
  item: PropTypes.any,
};

PrismicComponent.defaultProps = {
  item: []
}

export default PrismicComponent;
