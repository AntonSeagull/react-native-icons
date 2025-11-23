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

export const CiDatabase = (props: IconProps) => {
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
        <Path d="M12 2.06c-3.53 0-6.18 1.23-6.18 2.86v14.16c0 1.63 2.65 2.86 6.18 2.86s6.18-1.23 6.18-2.86V4.92c0-1.63-2.66-2.86-6.18-2.86m5.18 17.02c0 .78-1.97 1.86-5.18 1.86s-5.18-1.08-5.18-1.86v-3.12A9.35 9.35 0 0 0 12 17.22a9.37 9.37 0 0 0 5.18-1.26Zm0-4.72c0 .78-1.97 1.86-5.18 1.86s-5.18-1.08-5.18-1.86v-3.12A9.35 9.35 0 0 0 12 12.5a9.37 9.37 0 0 0 5.18-1.26Zm0-4.72c0 .78-1.97 1.86-5.18 1.86s-5.18-1.08-5.18-1.86V6.52A9.35 9.35 0 0 0 12 7.78a9.37 9.37 0 0 0 5.18-1.26ZM12 6.78c-3.21 0-5.18-1.08-5.18-1.86S8.79 3.06 12 3.06s5.18 1.08 5.18 1.86S15.21 6.78 12 6.78" />
      </G>
    </Svg>
  );
};