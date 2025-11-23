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

export const WiMoonWaxingCrescent5 = (props: IconProps) => {
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
        <Path d="M14.99 25.71c2.04 0 3.93-.5 5.65-1.51s3.1-2.37 4.1-4.1 1.51-3.61 1.51-5.65-.5-3.92-1.51-5.65-2.37-3.09-4.1-4.09-3.61-1.51-5.65-1.51c1.67 2.9 2.5 6.65 2.5 11.25 0 2.33-.17 4.43-.52 6.3s-1 3.51-1.98 4.96" />
      </G>
    </Svg>
  );
};