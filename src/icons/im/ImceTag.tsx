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

export const ImceTag = (props: IconProps) => {
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
        <Path d="M15.25 0h-6c-.412 0-.989.239-1.28.53L.531 7.969a.75.75 0 0 0 0 1.061l6.439 6.439a.75.75 0 0 0 1.061 0L15.47 8.03c.292-.292.53-.868.53-1.28v-6a.753.753 0 0 0-.75-.75M11.5 6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 6" />
      </G>
    </Svg>
  );
};