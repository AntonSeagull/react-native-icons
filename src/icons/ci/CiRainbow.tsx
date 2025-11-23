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

export const CiRainbow = (props: IconProps) => {
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
        <Path d="M3.089 16.71A9 9 0 0 1 8.97 8.326a8.912 8.912 0 0 1 11.941 8.384.5.5 0 0 0 1 0 10.03 10.03 0 0 0-6.46-9.291 9.98 9.98 0 0 0-11.06 2.944 10.06 10.06 0 0 0-2.3 6.347.5.5 0 0 0 1 0Z" />
        <Path d="M5.985 16.71A6.08 6.08 0 0 1 12 10.7a6.08 6.08 0 0 1 6.015 6.015.5.5 0 0 0 1 0 7.013 7.013 0 0 0-12.409-4.487 7.15 7.15 0 0 0-1.621 4.482.5.5 0 0 0 1 0" />
        <Path d="M8.88 16.71a3.12 3.12 0 0 1 6.24 0 .5.5 0 0 0 1 0 4.119 4.119 0 0 0-7.255-2.669 4.22 4.22 0 0 0-.985 2.669.5.5 0 0 0 1 0" />
      </G>
    </Svg>
  );
};