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

export const TfiFlickrAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.5.5a8.001 8.001 0 0 0 0 16 8 8 0 0 0 0-16M5.433 10.979a2.518 2.518 0 1 1-.002-5.036 2.518 2.518 0 0 1 .002 5.036m6.317 0a2.517 2.517 0 1 1 0-5.036 2.518 2.518 0 1 1 0 5.036" />
      </G>
    </Svg>
  );
};