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

export const LuDisc3 = (props: IconProps) => {
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
        <Circle cx={12} cy={12} r={10} />
        <Path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
        <Circle cx={12} cy={12} r={2} />
        <Path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
      </G>
    </Svg>
  );
};