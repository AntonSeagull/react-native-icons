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

export const PiAndroidLogoBold = (props: IconProps) => {
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
        <Path d="M180 148a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-88-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m152 28v24a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20v-22.87a117.35 117.35 0 0 1 33.72-82.44l-22.21-22.2a12 12 0 0 1 17-17L64.3 63.33A114.35 114.35 0 0 1 127.59 44h.41a115.15 115.15 0 0 1 63.89 19.14l23.62-23.63a12 12 0 0 1 17 17l-22 22A115.18 115.18 0 0 1 244 160m-24 0a92 92 0 0 0-92.33-92C77.12 68.18 36 110 36 161.13V180h184Z" />
      </G>
    </Svg>
  );
};