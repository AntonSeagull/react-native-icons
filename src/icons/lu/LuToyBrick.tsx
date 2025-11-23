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

export const LuToyBrick = (props: IconProps) => {
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
        <Rect width={18} height={12} x={3} y={8} rx={1} />
        <Path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
      </G>
    </Svg>
  );
};