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

export const PiUserCircleBold = (props: IconProps) => {
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
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M79.57 196.57a60 60 0 0 1 96.86 0 83.72 83.72 0 0 1-96.86 0M100 120a28 28 0 1 1 28 28 28 28 0 0 1-28-28m94 59.94a83.5 83.5 0 0 0-29-23.42 52 52 0 1 0-74 0 83.5 83.5 0 0 0-29 23.42 84 84 0 1 1 131.9 0Z" />
      </G>
    </Svg>
  );
};