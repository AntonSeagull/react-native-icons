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

export const LuShare2 = (props: IconProps) => {
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
        <Circle cx={18} cy={5} r={3} />
        <Circle cx={6} cy={12} r={3} />
        <Circle cx={18} cy={19} r={3} />
        <Path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
      </G>
    </Svg>
  );
};