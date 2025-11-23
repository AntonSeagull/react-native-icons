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

export const PiPersonSimpleLight = (props: IconProps) => {
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
        <Path d="M128 78a30 30 0 1 0-30-30 30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18m101.14 101.09a6 6 0 0 1-8.23 2c-.37-.21-36.49-21.43-86.91-23v39.61l62.48 70.3a6 6 0 0 1-9 8L128 161l-59.52 67a6 6 0 0 1-9-8L122 149.72v-39.61c-50.42 1.6-86.55 22.82-86.92 23a6 6 0 0 1-6.17-10.29C30.6 121.84 71 98 128 98s97.39 23.84 99.09 24.86a6 6 0 0 1 2.05 8.23" />
      </G>
    </Svg>
  );
};