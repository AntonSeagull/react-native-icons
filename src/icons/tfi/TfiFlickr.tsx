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

export const TfiFlickr = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.295 8.5A3.648 3.648 0 1 1 0 8.499a3.648 3.648 0 0 1 7.295.001M17 8.5a3.648 3.648 0 0 1-7.295 0A3.648 3.648 0 0 1 17 8.5m-1 0a2.65 2.65 0 0 0-2.649-2.647c-1.459 0-2.646 1.188-2.646 2.647s1.187 2.647 2.646 2.647A2.65 2.65 0 0 0 16 8.5" />
      </G>
    </Svg>
  );
};