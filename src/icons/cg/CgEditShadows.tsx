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

export const CgEditShadows = (props: IconProps) => {
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
        <Path fill="currentColor" d="M15.306 6.992A6 6 0 1 0 15.318 17H12v-1h4.472c.519-.58.926-1.26 1.19-2.008H12v-1h5.918a6 6 0 0 0 .003-1.966H12v-1h5.668a6 6 0 0 0-1.203-2.034H12v-1z" />
        <Path fill="currentColor" fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16" clipRule="evenodd" />
      </G>
    </Svg>
  );
};