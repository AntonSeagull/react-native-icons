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

export const LuWallpaper = (props: IconProps) => {
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
        <Path d="M12 17v4M8 21h8M9 17l6.1-6.1a2 2 0 0 1 2.81.01L22 15" />
        <Circle cx={8} cy={9} r={2} />
        <Rect width={20} height={14} x={2} y={3} rx={2} />
      </G>
    </Svg>
  );
};