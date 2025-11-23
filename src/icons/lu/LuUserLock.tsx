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

export const LuUserLock = (props: IconProps) => {
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
        <Circle cx={10} cy={7} r={4} />
        <Path d="M10.3 15H7a4 4 0 0 0-4 4v2M15 15.5V14a2 2 0 0 1 4 0v1.5" />
        <Rect width={8} height={5} x={13} y={16} rx={0.899} />
      </G>
    </Svg>
  );
};