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

export const BiLogoWindows = (props: IconProps) => {
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
        <Path d="m3 5.557 7.357-1.002.004 7.097-7.354.042zm7.354 6.913.006 7.103-7.354-1.011v-6.14zm.892-8.046L21.001 3v8.562l-9.755.077zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161z" />
      </G>
    </Svg>
  );
};