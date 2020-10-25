import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import Container from "../../Container";
import Grid from "../../Grid";
import PrismicComponent from "../../PrismicComponent";

const RichTextComponent = ({ fields, col }) => {
  return (
    <div className={`col-${col}`}>
      {fields.column.map((field, id) => (
        <PrismicComponent key={id} item={field} />
      ))}
    </div>
  );
};

const GridColumns = (props) => {

  if (!props) return;

  const { items } = props;

  return (
    <Section>
      <Container maxWidth={[768, 1080]}>
        <Grid gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
          {items &&
            items.map((item, id) => (
              <RichTextComponent key={id} fields={item} col={id} />
            ))}
        </Grid>
      </Container>
    </Section>
  );
};

GridColumns.propTypes = {
  items: PropTypes.array,
};

export default GridColumns;
