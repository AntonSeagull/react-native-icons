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

export const Imgue2 = (props: IconProps) => {
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
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 6h-1v1.5a1.5 1.5 0 0 1-3 0V10H4V9h8zm-1-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
      </G>
    </Svg>
  );
};