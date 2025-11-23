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

export const ImowDownRight2 = (props: IconProps) => {
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
        <Path d="M2.293 3.707 10.586 12H7a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1h.001V7a1 1 0 0 0-2 0v3.586L3.708 2.293a.997.997 0 0 0-1.414 0 1 1 0 0 0 0 1.414z" />
      </G>
    </Svg>
  );
};