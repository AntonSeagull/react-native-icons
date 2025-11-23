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

export const TbCameraBitcoin = (props: IconProps) => {
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
        <Path d="M12 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
        <Path d="M14.477 11.307A3 3 0 1 0 12 16M17 21v-6M19 15v-1.5M19 22.5V21M17 18h3M19 18h.5a1.5 1.5 0 0 1 0 3H16" />
        <Path d="M19 18h.5a1.5 1.5 0 0 0 0-3H16" />
      </G>
    </Svg>
  );
};