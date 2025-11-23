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

export const WiMoonWaxingCrescent2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.01 25.71c2.04 0 3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1 1.51-3.61 1.51-5.65-.5-3.92-1.51-5.65-2.37-3.09-4.09-4.09-3.61-1.51-5.65-1.51c1.1.59 2.07 1.32 2.89 2.19s1.47 1.82 1.95 2.83.83 2.03 1.05 3.07.34 2.09.34 3.16c0 .91-.04 1.76-.13 2.54s-.27 1.63-.53 2.53-.62 1.71-1.06 2.43-1.04 1.42-1.82 2.09-1.67 1.22-2.69 1.67" />
      </G>
    </Svg>
  );
};