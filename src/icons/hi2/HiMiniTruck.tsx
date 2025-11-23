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

export const HiMiniTruck = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6.5 3q-1.577 0-3.125.117A1.49 1.49 0 0 0 2 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A42 42 0 0 0 6.5 3M2 12v2.5A1.5 1.5 0 0 0 3.5 16h.041a3 3 0 0 1 5.918 0h.791a.75.75 0 0 0 .75-.75V12z" />
        <Path d="M6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.75-13a.75.75 0 0 0-.75.75v8.514a3 3 0 0 1 4.893 1.44c.37-.275.61-.719.595-1.227a24.9 24.9 0 0 0-1.784-8.549A1.49 1.49 0 0 0 14.823 5zm1.25 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      </G>
    </Svg>
  );
};