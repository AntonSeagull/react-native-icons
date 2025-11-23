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

export const Imttr = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.743 0C1.941 0 0 2.19 0 6.279v8.579l3.725-3.729V6.771c0-1.694.449-2.772 1.955-3.014.526-.103 1.621-.067 2.317-.067v2.587a.247.247 0 0 0 .245.269q.093-.002.184-.093L14.881 0zm6.532 4.871v4.358c0 1.694-.449 2.772-1.955 3.014-.526.103-1.621.067-2.317.067V9.723a.4.4 0 0 0-.009-.087.246.246 0 0 0-.236-.182q-.094.001-.184.093L1.119 16l9.139.001c3.802 0 5.743-2.19 5.743-6.279V1.143l-3.725 3.729z" />
      </G>
    </Svg>
  );
};