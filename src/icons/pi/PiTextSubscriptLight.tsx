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

export const PiTextSubscriptLight = (props: IconProps) => {
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
        <Path d="M246 208a6 6 0 0 1-6 6h-48a6 6 0 0 1-4.8-9.6l43.17-57.56A18 18 0 1 0 199 130a6 6 0 1 1-11.31-4A30 30 0 1 1 240 154.06L204 202h36a6 6 0 0 1 6 6M147.93 51.47a6 6 0 0 0-8.46.6L92 106.84 44.53 52.07a6 6 0 1 0-9.06 7.86L84.06 116l-48.59 56.07a6 6 0 1 0 9.06 7.86L92 125.16l47.47 54.77a6 6 0 0 0 9.06-7.86L99.94 116l48.59-56.07a6 6 0 0 0-.6-8.46" />
      </G>
    </Svg>
  );
};