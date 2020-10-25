import React from "react";
import PropTypes from "prop-types";
import { SliceTypes } from "../../constants/types";
import Intro from "./Slices/Intro";
import ShowCase from "./Slices/ShowCase";
import Youtube from "./Slices/Youtube";
import Blockquote from "./Slices/BlockQuote";
import ExploreMore from "./Slices/ExploreMore";
import Signup from "./Slices/Signup";
import WhyEdApp from "./Slices/WhyEdApp";
import GridColumns from "./Slices/GridColumns";

const {
  CASE_STUDY_INTRO,
  SHOWCASE,
  MEDIA_PLAYER,
  BLOCKQUOTE,
  EXPLORE_MORE,
  SIGNUP,
  WHY_ED_APP,
  GRID_TWO_COLUMN,
} = SliceTypes;

const SliceComponent = ({ slice }) => {
  const { slice_type: type, ...props } = slice;

  switch (type) {
    case CASE_STUDY_INTRO:
      return <Intro {...props} />;
      break;
    case SHOWCASE:
      return <ShowCase {...props} />;
      break;
    case MEDIA_PLAYER:
      return <Youtube {...props} />;
      break;
    case BLOCKQUOTE:
      return <Blockquote {...props} />;
      break;
    case EXPLORE_MORE:
      return <ExploreMore {...props} />;
      break;
    case SIGNUP:
      return <Signup {...props} />;
      break;
    case WHY_ED_APP:
      return <WhyEdApp {...props} />;
      break;
    case GRID_TWO_COLUMN:
      return <GridColumns {...props} />;
      break;
    default:
      return null;
      break;
  }
};

const SliceZone = (props) => {
  if (!props) return;

  const { slices } = props;

  return (
    <>
      {slices &&
        slices.map((slice, idx) => <SliceComponent key={idx} slice={slice} />)}
    </>
  );
};

SliceZone.propTypes = {
  slices: PropTypes.array.isRequired,
};

export default SliceZone;
