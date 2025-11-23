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

export const Immoon = (props: IconProps) => {
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
        <Path d="M4.055 8a1.851 1.851 0 1 1 3.703 0 1.851 1.851 0 0 1-3.703 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.928 14.989C3.522 13.589 1.905 10.984 1.905 8s1.617-5.589 4.023-6.989C8.334 2.41 9.953 5.016 9.953 8s-1.618 5.589-4.025 6.989" />
      </G>
    </Svg>
  );
};