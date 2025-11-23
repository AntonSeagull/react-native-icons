import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const PiTextItalicThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M196 56a4 4 0 0 1-4 4h-37.12l-45.33 136H144a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h37.12l45.33-136H112a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};