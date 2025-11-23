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

export const PiUsersFourBold = (props: IconProps) => {
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
        <Path d="M24.79 121.59a12 12 0 0 0 16.81-2.38 48 48 0 0 1 76.81 0 12 12 0 0 0 16.8 2.39 12.2 12.2 0 0 0 2.38-2.39 48 48 0 0 1 76.81 0 12 12 0 1 0 19.19-14.41 72 72 0 0 0-25.3-21.22 40 40 0 1 0-64.58 0A71 71 0 0 0 128 94.31a71 71 0 0 0-15.71-10.74 40 40 0 1 0-64.58 0 72 72 0 0 0-25.3 21.22 12 12 0 0 0 2.38 16.8M176 44a16 16 0 1 1-16 16 16 16 0 0 1 16-16m-96 0a16 16 0 1 1-16 16 16 16 0 0 1 16-16m128.29 151.57a40 40 0 1 0-64.58 0A71.3 71.3 0 0 0 128 206.3a71.3 71.3 0 0 0-15.71-10.73 40 40 0 1 0-64.58 0 72 72 0 0 0-25.3 21.22 12 12 0 0 0 19.19 14.42 48 48 0 0 1 76.81 0 12 12 0 0 0 16.8 2.39 12.2 12.2 0 0 0 2.38-2.39 48 48 0 0 1 76.81 0 12 12 0 1 0 19.19-14.41 71.9 71.9 0 0 0-25.3-21.23M80 156a16 16 0 1 1-16 16 16 16 0 0 1 16-16m96 0a16 16 0 1 1-16 16 16 16 0 0 1 16-16" />
      </G>
    </Svg>
  );
};