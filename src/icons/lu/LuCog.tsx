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

export const LuCog = (props: IconProps) => {
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
        <Path d="M11 10.27 7 3.34M11 13.73l-4 6.93M12 22v-2M12 2v2M14 12h8M17 20.66l-1-1.73M17 3.34l-1 1.73M2 12h2M20.66 17l-1.73-1M20.66 7l-1.73 1M3.34 17l1.73-1M3.34 7l1.73 1" />
        <Circle cx={12} cy={12} r={2} />
        <Circle cx={12} cy={12} r={8} />
      </G>
    </Svg>
  );
};