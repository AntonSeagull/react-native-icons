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

export const LuScissors = (props: IconProps) => {
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
        <Circle cx={6} cy={6} r={3} />
        <Path d="M8.12 8.12 12 12M20 4 8.12 15.88" />
        <Circle cx={6} cy={18} r={3} />
        <Path d="M14.8 14.8 20 20" />
      </G>
    </Svg>
  );
};