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

export const TbPropeller = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M14.167 10.5q1.083-2.307 1.303-4.514C15.69 4.356 14.708 3 12 3S8.31 4.357 8.53 5.986q.22 2.207 1.303 4.514M13.169 16.751q1.456 2.092 3.257 3.386c1.3 1 2.967.833 4.321-1.512s.67-3.874-.85-4.498q-2.021-.913-4.562-1.128M8.664 13q-2.54.215-4.56 1.128c-1.522.623-2.206 2.153-.852 4.498s3.02 2.517 4.321 1.512q1.8-1.294 3.258-3.386" />
      </G>
    </Svg>
  );
};