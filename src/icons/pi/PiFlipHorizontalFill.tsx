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

export const PiFlipHorizontalFill = (props: IconProps) => {
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
        <Path d="M120 40v160a16 16 0 0 1-16 16H40a16 16 0 0 1-14.78-22.15l64-159.93.06-.14A16 16 0 0 1 120 40m109.33 168.84A16 16 0 0 1 216 216h-64a16 16 0 0 1-16-16V40a16 16 0 0 1 30.74-6.23l.06.14 64 159.93a16 16 0 0 1-1.47 15M216 200l-.06-.15L152 40v160Z" />
      </G>
    </Svg>
  );
};