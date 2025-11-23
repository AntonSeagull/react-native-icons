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

export const CgLayoutPin = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M16.93 4.016h-2.165a3.001 3.001 0 0 0-5.67 0H6.932a3 3 0 0 0-3 3v2.196a3.001 3.001 0 0 0 0 5.608v2.196a3 3 0 0 0 3 3h2.154a3.001 3.001 0 0 0 5.692 0h2.154a3 3 0 0 0 3-3v-2.171a3.001 3.001 0 0 0 0-5.658V7.016a3 3 0 0 0-3-3m-11 10.853v2.147a1 1 0 0 0 1 1H9.12a3.001 3.001 0 0 1 5.623 0h2.189a1 1 0 0 0 1-1v-2.17a3.001 3.001 0 0 1 0-5.66v-2.17a1 1 0 0 0-1-1h-2.177a3.001 3.001 0 0 1-5.647 0H6.931a1 1 0 0 0-1 1v2.147a3.001 3.001 0 0 1 0 5.706" clipRule="evenodd" />
      </G>
    </Svg>
  );
};