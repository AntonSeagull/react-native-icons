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

export const IoCreateSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M464.37 49.2a22.07 22.07 0 0 0-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 0 0 1.01-30.68M252.76 336H176v-76.75999999999999l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400z" />
        <Path d="M208 304h31.49L400 143.16V112h-31.15L208 272.51z" />
      </G>
    </Svg>
  );
};