import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import Container from "../../Container";
import Card from "../../Card";
import Grid from "../../Grid";

const ExploreMore = (props) => {

  const { items } = props;

  return (
    <Section background="#f8f9fa">
      <Container maxWidth={[768, 1080]}>
        <Grid
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gridGap={2}
        >
          {items.map((item, id) => (
            <Card
              key={id}
              cardImage={item.card_image.url}
              cardUrl={item.card_link.url}
              cardText={item.card_link_title[0].text}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

ExploreMore.propTypes = {
  items: PropTypes.array
};

ExploreMore.defaultProps = {
  items: []
}

export default ExploreMore;
