import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import Grid from "../../Grid";
import Image from "../../Image";
import Container from "../../Container";
import Typography from "../../Typography";
import { ComponentTypes } from "../../../constants/types";

const WhyEdApp = (props) => {
  
  if (!props) return;

  const { items } = props;

  return (
    <Section height={450}>
      <Container>
        <Typography
          type={ComponentTypes.HEADING_TWO}
          text={"Why Edd?"}
          align="center"
        />
      </Container>
      <Container>
        <Grid gridGap={4}>
          {items.map(({ image, title, description }, id) => (
            <div key={id}>
              {image && (
                <Image
                  alt={image.alt}
                  borderRadius={160}
                  width={160}
                  height={160}
                  url={image.url}
                  centerAlign
                />
              )}
              {title && (
                <Typography
                  type={ComponentTypes.HEADING_THREE}
                  text={title}
                  align="center"
                />
              )}
              {description && (
                <Typography
                  type={ComponentTypes.PARAGRAPH}
                  text={description}
                  align="center"
                />
              )}
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

WhyEdApp.propTypes = {
  items: PropTypes.array,
};

WhyEdApp.defaultProps = {
  items: [],
};

export default WhyEdApp;
