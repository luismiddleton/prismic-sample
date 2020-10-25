import styled from "styled-components";
import { typography, position, space } from "styled-system";

const StyledFigure = styled.figure`
  ${space}
`;

const StyledFigureCaption = styled.figcaption`
  ${space}
  ${typography}
  &::before {
    content: "– ";
    height: 2em;
    float: left;
    margin-right: 0.3em;
  }
`;

const BlockQuote = styled.blockquote`
  ${typography}
  ${space}
  ${position}
  display: block;
  text-align: left;
  &::before {
    content: "“";
    font-family: "Times New Roman";
    position: absolute;
    font-size: 110px;
    top: -10px;
    line-height: 0.9;
    font-weight: 300;
    vertical-align: middle;
    left: -60px;
    ${(props) => !props.hasBackground && "color: #e6ebf0;"}
  }
`;

export const StyledBlockQuote = ({
  children,
  author,
  hasBackground = false,
}) => {
  if (!children) return;
  return (
    <StyledFigure m={0}>
      <BlockQuote
        hasBackground={hasBackground}
        fontSize={[2, 3]}
        lineHeight={1.4}
        ml={5}
        position="relative"
      >
        {children}
      </BlockQuote>
      {author && (
        <StyledFigureCaption ml={5} fontSize={1}>
          {author}
        </StyledFigureCaption>
      )}
    </StyledFigure>
  );
};
