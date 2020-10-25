import React from "react";
import PropTypes from "prop-types";
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentTitle,
} from "../styled/card";
import Image from "../Image";

const Card = (props) => {

  if (!props) return;

  const {
    borderRadius,
    border,
    boxShadow,
    minHeight,
    cardImage,
    cardText,
    cardUrl,
  } = props;

  return (
    <StyledCard
      borderRadius={borderRadius}
      border={border}
      boxShadow={boxShadow}
      minHeight={minHeight}
    >
      {cardUrl && (
        <StyledCardContent
          href={cardUrl}
          minHeight={minHeight}
          alignItems="center"
          pl={3}
          pr={3}
        >
          {cardImage && <Image width={60} height={60} url={cardImage} />}
          {cardText && (
            <StyledCardContentTitle pl={2}>{cardText}</StyledCardContentTitle>
          )}
        </StyledCardContent>
      )}
    </StyledCard>
  );
};

Card.propTypes = {
  borderRadius: PropTypes.any,
  border: PropTypes.any,
  boxShadow: PropTypes.any,
  minHeight: PropTypes.any,
  cardImage: PropTypes.string,
  cardText: PropTypes.string,
  cardUrl: PropTypes.string,
};

Card.defaultProps = {
  borderRadius: 4,
  border: "1px solid",
  boxShadow: "0 1px 5px rgba(0,0,0,.12)",
  minHeight: 92,
};

export default Card;
