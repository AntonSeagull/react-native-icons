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

export const LiaPeaceSolid = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m-1 2.05v10.468l-8.2 6.498A10.93 10.93 0 0 1 5 16C5 10.273 9.402 5.558 15 5.05m2 0c5.598.508 10 5.223 10 10.95 0 2.22-.666 4.287-1.803 6.018L17 15.518zm-2 13.02v8.88a10.96 10.96 0 0 1-6.95-3.37zm2 0 6.95 5.51A10.96 10.96 0 0 1 17 26.95z" />
      </G>
    </Svg>
  );
};