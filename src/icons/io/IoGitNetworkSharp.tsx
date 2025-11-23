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

export const IoGitNetworkSharp = (props: IconProps) => {
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
        <Path d="M384 32a64 64 0 0 0-57.67 91.73l-70.83 80.82-70.19-80.1A64 64 0 1 0 128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1 0 64 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 0 0 0-128M96 96a32 32 0 1 1 32 32 32 32 0 0 1-32-32m160 352a32 32 0 1 1 32-32 32 32 0 0 1-32 32m128-320a32 32 0 1 1 32-32 32 32 0 0 1-32 32" />
      </G>
    </Svg>
  );
};