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

export const RiRadarFill = (props: IconProps) => {
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
        <Path d="m14.369 4.398-3.485 6.035 1.732 1 3.485-6.035c4.169 2.772 6.305 7.08 4.56 10.102-1.86 3.222-7.19 3.355-11.91.63C4.028 13.402 1.48 8.721 3.34 5.5c1.745-3.023 6.543-3.327 11.028-1.102m1.515-2.625 1.732 1-1.5 2.598-1.732-1zM6.732 20H17v2H5.018a1 1 0 0 1-1.015-.922 1 1 0 0 1 .131-.578l2.25-3.897 1.732 1z" />
      </G>
    </Svg>
  );
};