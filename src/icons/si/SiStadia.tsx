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

export const SiStadia = (props: IconProps) => {
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
        <Path d="M6.525 10.03a18.28 18.28 0 0 1 15.78.263c.264.198.658 0 .724-.263l.92-2.827c.132-.263 0-.658-.328-.79A22.36 22.36 0 0 0 .279 8.65a.66.66 0 0 0-.197.855l2.17 4.8c.13.329.525.526.854.395 2.433-.921 6.18-1.841 9.995-1.315-2.63.46-4.669 1.38-6.313 2.367a.66.66 0 0 0-.197.854l1.315 3.025c.132.263.46.329.658.132a7.4 7.4 0 0 1 1.512-1.184c2.104-1.184 4.997-2.104 8.876-1.907a.66.66 0 0 0 .658-.46l.986-2.959c.132-.263 0-.658-.263-.789A20.05 20.05 0 0 0 6.46 10.03z" />
      </G>
    </Svg>
  );
};