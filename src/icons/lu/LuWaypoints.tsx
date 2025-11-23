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

export const LuWaypoints = (props: IconProps) => {
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
        <Circle cx={12} cy={4.5} r={2.5} />
        <Path d="m10.2 6.3-3.9 3.9" />
        <Circle cx={4.5} cy={12} r={2.5} />
        <Path d="M7 12h10" />
        <Circle cx={19.5} cy={12} r={2.5} />
        <Path d="m13.8 17.7 3.9-3.9" />
        <Circle cx={12} cy={19.5} r={2.5} />
      </G>
    </Svg>
  );
};