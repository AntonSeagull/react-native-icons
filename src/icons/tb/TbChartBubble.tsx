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

export const TbChartBubble = (props: IconProps) => {
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
        <Path d="M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 7.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" />
      </G>
    </Svg>
  );
};