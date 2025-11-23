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

export const PiShowerThin = (props: IconProps) => {
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
        <Path d="M60 236a8 8 0 1 1-8-8 8 8 0 0 1 8 8m24-40a8 8 0 1 0 8 8 8 8 0 0 0-8-8m-64 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8m32-32a8 8 0 1 0 8 8 8 8 0 0 0-8-8M252 40a4 4 0 0 1-4 4h-30.34l-29.93 29.93L165.86 202a12 12 0 0 1-8.17 9.44 12.1 12.1 0 0 1-3.69.56 12 12 0 0 1-8.46-3.52l-98-98A12 12 0 0 1 54 90.14l128-21.87 31.1-31.1A4 4 0 0 1 216 36h32a4 4 0 0 1 4 4m-72.89 36.89L55.37 98a4 4 0 0 0-2.19 6.78l98 98a4 4 0 0 0 6.78-2.17Z" />
      </G>
    </Svg>
  );
};