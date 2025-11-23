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

export const PiTextSubscriptFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-81.45 115.41a8 8 0 1 1-13.1 9.18L92 126l-21.45 30.59a8 8 0 1 1-13.1-9.18L82.23 112 57.45 76.59a8 8 0 0 1 13.1-9.18L92 98.05l21.45-30.64a8 8 0 0 1 13.1 9.18L101.77 112ZM192 192h-40a8 8 0 0 1-6.4-12.8l36-48a12 12 0 1 0-19.15-14.46 13.1 13.1 0 0 0-2.58 4.81 8 8 0 1 1-15.68-3.18 28.17 28.17 0 1 1 50.2 22.44L168 176h24a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};