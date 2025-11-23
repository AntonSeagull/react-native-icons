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

export const ImceTags = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M19.25 0h-6c-.412 0-.989.239-1.28.53L4.531 7.969a.75.75 0 0 0 0 1.061l6.439 6.439a.75.75 0 0 0 1.061 0L19.47 8.03c.292-.292.53-.868.53-1.28v-6a.75.75 0 0 0-.75-.75M15.5 6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15.5 6" />
        <Path d="M2 8.5 10.5 0H9.25c-.412 0-.989.239-1.28.53L.531 7.969a.75.75 0 0 0 0 1.061l6.439 6.439a.75.75 0 0 0 1.061 0l.47-.47z" />
      </G>
    </Svg>
  );
};