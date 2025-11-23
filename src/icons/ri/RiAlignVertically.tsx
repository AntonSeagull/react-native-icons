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

export const RiAlignVertically = (props: IconProps) => {
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
        <Path d="M3 11h18v2H3zm15 7v3h-2v-3h-3l4-4 4 4zM8 18v3H6v-3H3l4-4 4 4zM18 6h3l-4 4-4-4h3V3h2zM8 6h3l-4 4-4-4h3V3h2z" />
      </G>
    </Svg>
  );
};