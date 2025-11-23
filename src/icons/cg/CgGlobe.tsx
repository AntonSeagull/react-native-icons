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

export const CgGlobe = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M6.853 8a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6" clipRule="evenodd" />
        <Path fill="currentColor" d="M5 12.13a8 8 0 0 0 5.941 3.819V18H8.853v2h6v-2h-1.912v-2.073A8.002 8.002 0 0 0 18.63 3.745l-1.704 1.048a6 6 0 1 1-10.221 6.288z" />
      </G>
    </Svg>
  );
};