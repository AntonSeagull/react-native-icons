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

export const GrCodeSandbox = (props: IconProps) => {
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
        <Path fill="none" stroke="#444" strokeWidth={2} d="m12 1.5-9 5v11l9 5 9-5v-11zm0 21v-11m9-5-9 5m0 0-9-5m18 11V12l-4.5 2.5V20zm-18 0V12l4.5 2.5V20zm9-16L7.5 4 12 6.5 16.5 4z" />
      </G>
    </Svg>
  );
};