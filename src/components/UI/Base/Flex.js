import styled from 'styled-components';
import Tag from 'clean-tag';
import {
  space,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  fontSize,
  color,
  flex,
  textAlign,
  lineHeight,
  responsiveStyle,
  borders,
  borderColor,
  borderRadius,
  display,
  flexWrap,
  position,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system';

const Flex = styled(Tag)`
  display: flex;
  ${flexWrap};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
  ${flex};
  ${borders};
  ${space};
  ${width};
  ${minWidth};
  ${maxWidth};
  ${height};
  ${minHeight};
  ${fontSize};
  ${color};
  ${responsiveStyle};
  ${textAlign};
  ${lineHeight};
  ${borderColor};
  ${borderRadius};
  ${display};
  ${position};
`;

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flex.propTypes,
  ...borders.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...display.propTypes,
  ...position.propTypes
};

export default Flex;