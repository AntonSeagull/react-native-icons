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

export const LuMonitorSpeaker = (props: IconProps) => {
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
        <Path d="M5.5 20H8M17 9h.01" />
        <Rect width={10} height={16} x={12} y={4} rx={2} />
        <Path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
        <Circle cx={17} cy={15} r={1} />
      </G>
    </Svg>
  );
};