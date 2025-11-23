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

export const FcDisclaimer = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13 22H8v-8.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5zM20 22h-5V7.5C15 6.1 16.1 5 17.5 5S20 6.1 20 7.5zM27 22h-5V5.5C22 4.1 23.1 3 24.5 3S27 4.1 27 5.5zM34 22h-5V8.5C29 7.1 30.1 6 31.5 6S34 7.1 34 8.5zM32.1 43l-5-5 10-10c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.4 3.6 0 4.9z" />
        <Path d="M29 21c0 .6-.4 1-1 1s-1-.4-1-1h-5c0 .6-.4 1-1 1s-1-.4-1-1h-5c0 .6-.4 1-1 1s-1-.4-1-1H8v16c0 4.4 3.6 8 8 8h11.2c3.7 0 6.8-3 6.8-6.8V21z" />
        <Path d="m15.413 28.971 2.474-2.474 10.605 10.605-2.474 2.474z" />
        <Path d="m25.993 26.504 2.475 2.474-10.605 10.605-2.475-2.474z" />
      </G>
    </Svg>
  );
};