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

export const VscTarget = (props: IconProps) => {
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
        <Path d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        <Path d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-7 6A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
      </G>
    </Svg>
  );
};