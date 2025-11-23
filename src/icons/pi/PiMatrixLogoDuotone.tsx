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

export const PiMatrixLogoDuotone = (props: IconProps) => {
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
        <Path d="M216 40v176H40V40Z" opacity={0.2} />
        <Path d="M72 216a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H48v160h16a8 8 0 0 1 8 8M216 32h-24a8 8 0 0 0 0 16h16v160h-16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-32 88a32 32 0 0 0-56-21.13 31.93 31.93 0 0 0-40.71-6.15A8 8 0 0 0 72 96v64a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0Z" />
      </G>
    </Svg>
  );
};