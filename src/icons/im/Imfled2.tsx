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

export const Imfled2 = (props: IconProps) => {
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
        <Path d="M6 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M11 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4 6.5m6 5.5H6v-1h4zm.5-4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 10.5 8" />
      </G>
    </Svg>
  );
};