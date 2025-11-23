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

export const WiMoonWaxingCrescent1 = (props: IconProps) => {
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
        <Path d="M15.01 25.71c2.04 0 3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1 1.51-3.61 1.51-5.65-.5-3.92-1.51-5.65-2.37-3.09-4.09-4.09-3.61-1.51-5.65-1.51c1.32.52 2.48 1.2 3.47 2.06s1.78 1.79 2.35 2.82.99 2.07 1.27 3.13.41 2.14.41 3.24c0 .64-.02 1.26-.07 1.84s-.15 1.2-.29 1.87-.33 1.28-.56 1.86-.54 1.15-.92 1.74-.83 1.11-1.35 1.58-1.14.92-1.87 1.33-1.55.75-2.44 1.04" />
      </G>
    </Svg>
  );
};