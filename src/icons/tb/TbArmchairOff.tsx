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

export const TbArmchairOff = (props: IconProps) => {
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
        <Path d="M17 13a2 2 0 1 1 4 0v4m-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 1 1 4 0v2h8.036" />
        <Path d="M5 11V6a3 3 0 0 1 .134-.89m1.987-1.98A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v5M6 19v2M18 19v2M3 3l18 18" />
      </G>
    </Svg>
  );
};