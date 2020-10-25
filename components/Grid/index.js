import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { grid } from "styled-system";

const StyledGrid = styled.div`
  ${grid}

  display: grid;

  & > .left {
      grid-column: 1
  }

  & > .center {
      grid-column 2
  }

  & > .right {
      grid-column 3
  }
`;

const Grid = ({ gridGap, children, gridTemplateColumns }) => {
  return (
    <StyledGrid gridTemplateColumns={gridTemplateColumns} gridGap={gridGap}>
      {children}
    </StyledGrid>
  );
};

Grid.propTypes = {
  children: PropTypes.any,
  gridGap: PropTypes.number,
  gridTemplateColumns: PropTypes.any,
};

Grid.defaultProps = {
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
  gridGap: 2
}

export default Grid;
