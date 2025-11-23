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

export const PiAddressBookFill = (props: IconProps) => {
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
        <Path d="M160 112a24 24 0 1 1-24-24 24 24 0 0 1 24 24m64-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16v-24H32a8 8 0 0 1 0-16h16v-40H32a8 8 0 0 1 0-16h16V80H32a8 8 0 0 1 0-16h16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-33.6 123.2a67.9 67.9 0 0 0-27.4-21.69 40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 81.6 163.2a8 8 0 1 0 12.8 9.6 52 52 0 0 1 83.2 0 8 8 0 1 0 12.8-9.6" />
      </G>
    </Svg>
  );
};