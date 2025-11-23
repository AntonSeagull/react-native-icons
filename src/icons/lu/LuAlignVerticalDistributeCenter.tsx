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

export const LuAlignVerticalDistributeCenter = (props: IconProps) => {
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
        <Path d="M22 17h-3M22 7h-5M5 17H2M7 7H2" />
        <Rect width={14} height={6} x={5} y={14} rx={2} />
        <Rect width={10} height={6} x={7} y={4} rx={2} />
      </G>
    </Svg>
  );
};