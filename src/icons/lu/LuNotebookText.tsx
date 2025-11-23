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

export const LuNotebookText = (props: IconProps) => {
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
        <Path d="M2 6h4M2 10h4M2 14h4M2 18h4" />
        <Rect width={16} height={20} x={4} y={2} rx={2} />
        <Path d="M9.5 8h5M9.5 12H16M9.5 16H14" />
      </G>
    </Svg>
  );
};