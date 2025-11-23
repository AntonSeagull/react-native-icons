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

export const PiFastForwardLight = (props: IconProps) => {
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
        <Path d="m247.59 116.35-88.18-56.17a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 138 71.84v41L55.41 60.18a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 34 71.84v112.32a13.83 13.83 0 0 0 7.19 12.12 14 14 0 0 0 14.22-.46L138 143.21v40.95a13.83 13.83 0 0 0 7.19 12.12 14 14 0 0 0 14.22-.46l88.18-56.17a13.79 13.79 0 0 0 0-23.3m-110.44 13.18L49 185.69a1.9 1.9 0 0 1-2 .06 1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59 2 2 0 0 1 1-.26 1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Zm104 0L153 185.69a1.9 1.9 0 0 1-2 .06 1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59 2 2 0 0 1 1-.26 1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Z" />
      </G>
    </Svg>
  );
};