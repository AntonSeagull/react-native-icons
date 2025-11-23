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

export const WiMoonWaxingCrescent3 = (props: IconProps) => {
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
        <Path d="M15.01 25.71c2.04 0 3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1 1.51-3.61 1.51-5.65-.5-3.92-1.51-5.65-2.37-3.09-4.09-4.09-3.61-1.51-5.65-1.51c1.71 1.26 2.97 2.9 3.78 4.91S20 12.24 20 14.44c0 .9-.03 1.73-.1 2.5s-.21 1.59-.43 2.47-.51 1.68-.86 2.4-.83 1.42-1.45 2.12-1.33 1.28-2.15 1.78" />
      </G>
    </Svg>
  );
};