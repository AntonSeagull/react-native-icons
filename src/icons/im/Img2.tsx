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

export const Img2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2.431 3.159c-.138 0-.256.05-.316.144-.059.1-.05.225.013.353l1.559 2.7q.004.008 0 .013L1.237 10.7c-.063.128-.059.256 0 .353a.34.34 0 0 0 .3.156h2.306c.344 0 .513-.234.628-.447l2.491-4.406L5.374 3.59c-.116-.203-.287-.431-.644-.431h-2.3zM12.125 0c-.344 0-.494.216-.619.441 0 0-4.972 8.816-5.134 9.106l3.278 6.016c.116.203.291.441.644.441H12.6c.137 0 .247-.053.306-.147.063-.1.059-.228-.006-.356L9.65 9.554q-.004-.007 0-.016L14.759.504c.063-.128.066-.256.006-.356-.059-.094-.169-.147-.306-.147h-2.334z" />
      </G>
    </Svg>
  );
};