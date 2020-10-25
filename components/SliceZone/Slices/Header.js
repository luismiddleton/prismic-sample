import React from "react";
import PropTypes from "prop-types";
import { StyledHeader } from "../../styled/header";

const Header = (props) => {

  if (!props) return;

  const { url } = props;

  return (
    <>
      {url && (
        <StyledHeader
          backgroundImage={`url(${url})`}
          backgroundPosition="center"
          backgroundSize="cover"
          minHeight={450}
        />
      )}
    </>
  );
};

Header.propTypes = {
  url: PropTypes.string,
};

export default Header;
