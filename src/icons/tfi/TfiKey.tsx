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

export const TfiKey = (props: IconProps) => {
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
        <Path d="m14.811 6.299.707-.707-1.733-1.733.757-.753-.705-.709-8.146 8.107a2.98 2.98 0 0 0-1.703-.535c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.661-.222-1.268-.585-1.764l5.264-5.238 1.738 1.738.707-.707-1.737-1.736.701-.698zm-10.824 8.67c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2" />
      </G>
    </Svg>
  );
};