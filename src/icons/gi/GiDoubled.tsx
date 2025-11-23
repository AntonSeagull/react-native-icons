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

export const GiDoubled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M304.833 16c-261.69 0-320.71 387.657-62.343 387.657 86.284 0 86.955-129.375 0-129.375-139.947 0-99.134-202.896 62.343-258.282m-30.938 92.343c-86.283 0-86.955 129.375 0 129.375 139.95 0 88.353 202.896-73.125 258.282 261.69 0 331.49-387.657 73.125-387.657" />
      </G>
    </Svg>
  );
};