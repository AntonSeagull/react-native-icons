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

export const RiBlurOffLine = (props: IconProps) => {
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
        <Path d="M18.154 19.565A9 9 0 0 1 5.432 6.843L1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413zM6.848 8.258a7 7 0 0 0 9.89 9.891zm13.566 7.939-1.598-1.599a7 7 0 0 0-1.866-6.55L12 3.097 9.658 5.44 8.243 4.026 12 .269l6.364 6.364a9 9 0 0 1 2.05 9.564" />
      </G>
    </Svg>
  );
};