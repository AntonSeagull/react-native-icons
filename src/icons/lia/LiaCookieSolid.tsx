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

export const LiaCookieSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-2 4a1 1 0 0 0 0 2 1 1 0 0 0 0-2m5.5 1a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3M11 13a2 2 0 0 0 0 4 2 2 0 0 0 0-4m6 2a1 1 0 0 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m-9.5 3a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3m7 1a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3" />
      </G>
    </Svg>
  );
};