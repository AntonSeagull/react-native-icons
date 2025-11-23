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

export const LuScissorsLineDashed = (props: IconProps) => {
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
        <Path d="M5.42 9.42 8 12" />
        <Circle cx={4} cy={8} r={2} />
        <Path d="m14 6-8.58 8.58" />
        <Circle cx={4} cy={16} r={2} />
        <Path d="M10.8 14.8 14 18M16 12h-2M22 12h-2" />
      </G>
    </Svg>
  );
};