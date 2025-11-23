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

export const LiaTabletsSolid = (props: IconProps) => {
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
        <Path d="M22 3c-3.86 0-7 3.141-7 7s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7m0 2c2.757 0 5 2.243 5 5 0 1.017-.31 1.961-.834 2.752l-6.918-6.918A4.96 4.96 0 0 1 22 5m-4.166 2.248 6.918 6.92A4.97 4.97 0 0 1 22 15c-2.757 0-5-2.243-5-5 0-1.017.31-1.961.834-2.752M10 14c-3.86 0-7 3.141-7 7s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7m0 2a5.01 5.01 0 0 1 4.898 4H5.102c.464-2.28 2.484-4 4.898-4m-4.898 6h9.796A5.01 5.01 0 0 1 10 26a5.01 5.01 0 0 1-4.898-4" />
      </G>
    </Svg>
  );
};