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

export const PiCubeFocusBold = (props: IconProps) => {
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
        <Path d="M236 48v40a12 12 0 0 1-24 0V60h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M72 196H44v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m152-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M32 100a12 12 0 0 0 12-12V60h28a12 12 0 0 0 0-24H32a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m158 70.42-56 32a12 12 0 0 1-11.9 0l-56-32A12 12 0 0 1 60 160V96a12 12 0 0 1 6-10.42l56-32a12 12 0 0 1 11.9 0l56 32A12 12 0 0 1 196 96v64a12 12 0 0 1-6 10.42M96.19 96 128 114.18 159.81 96 128 77.82ZM84 153l32 18.28V135l-32-18.32Zm88 0v-36.32L140 135v36.36Z" />
      </G>
    </Svg>
  );
};