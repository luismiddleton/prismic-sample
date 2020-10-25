import styled from "styled-components";
import {
  border,
  boxShadow,
  flexbox,
  layout,
  space,
} from "styled-system";

export const StyledCard = styled.div`
  ${layout}
  ${border}
  ${boxShadow}
`;

export const StyledCardContent = styled.a`
  ${layout}
  ${space}
  ${flexbox}
  display: flex;
  color: black;
  transition: color 0.3s;
  &:hover {
    color: #46b4e9;
  }
`;

export const StyledCardContentTitle = styled.p`
  ${space}
`;
