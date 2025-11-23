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

export const LiaFlushed = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-4.5 3A5.506 5.506 0 0 0 6 13.5c0 3.033 2.467 5.5 5.5 5.5 1.86 0 3.504-.932 4.5-2.35A5.5 5.5 0 0 0 20.5 19c3.033 0 5.5-2.467 5.5-5.5S23.533 8 20.5 8c-1.86 0-3.504.932-4.5 2.35A5.5 5.5 0 0 0 11.5 8m0 2c1.93 0 3.5 1.57 3.5 3.5S13.43 17 11.5 17 8 15.43 8 13.5 9.57 10 11.5 10m9 0c1.93 0 3.5 1.57 3.5 3.5S22.43 17 20.5 17 17 15.43 17 13.5s1.57-3.5 3.5-3.5m-9 2a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3M12 21v2h8v-2z" />
      </G>
    </Svg>
  );
};