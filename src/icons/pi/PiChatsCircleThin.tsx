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

export const PiChatsCircleThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M227.79 186.39a76 76 0 0 0-61-110.07 76 76 0 1 0-138.58 62.07L20.5 164.6a12 12 0 0 0 14.9 14.9l26.21-7.71a75.9 75.9 0 0 0 27.6 7.9 76 76 0 0 0 105.18 40.1l26.21 7.71a12 12 0 0 0 14.9-14.9ZM60.9 163.66l-27.76 8.17a4 4 0 0 1-5-5l8.17-27.76a4.07 4.07 0 0 0-.31-3A68 68 0 1 1 63.92 164a4.06 4.06 0 0 0-3.02-.34m165.92 55.16a4 4 0 0 1-4 1l-27.76-8.17a4.07 4.07 0 0 0-3 .31A68 68 0 0 1 98 180a76 76 0 0 0 71.5-95.28 68 68 0 0 1 50.5 99.36 4.07 4.07 0 0 0-.31 3l8.17 27.76a4 4 0 0 1-1.04 3.98" />
      </G>
    </Svg>
  );
};