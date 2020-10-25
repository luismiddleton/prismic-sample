import React from "react";
import PropTypes from "prop-types";
import Section from "../../Section";
import PrismicComponent from "../../PrismicComponent";
import Grid from "../../Grid";

const Signup = (props) => {

  if (!props) return;

  const { primary } = props;

  const { signup_title, signup_extra, background_color } = primary;

  const fields = [...signup_title, ...signup_extra];

  return (
    <Section background={background_color} height={450}>
      <Grid gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
        <div className="center">
          {fields &&
            fields.map((item, idx) => (
              <PrismicComponent key={idx} item={item} />
            ))}
        </div>
      </Grid>
    </Section>
  );
};

Signup.propTypes = {
  primary: PropTypes.object,
};

export default Signup;
