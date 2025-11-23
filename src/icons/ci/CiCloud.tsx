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

export const CiCloud = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17.1 19.4H9.646a7.49 7.49 0 0 1-7.588-7.046A7.4 7.4 0 0 1 9.452 4.6a7.434 7.434 0 0 1 7.136 5.447 4.73 4.73 0 0 1 4.092 1.441 4.66 4.66 0 0 1 1.26 3.529A4.79 4.79 0 0 1 17.1 19.4M3.057 12.309A6.493 6.493 0 0 0 9.646 18.4H17.1a3.787 3.787 0 0 0 3.839-3.453 3.7 3.7 0 0 0-4.5-3.86l-.2.046-.269-.127a.62.62 0 0 1-.273-.392A6.42 6.42 0 0 0 9.452 5.6a6.4 6.4 0 0 0-6.395 6.711Z" />
      </G>
    </Svg>
  );
};