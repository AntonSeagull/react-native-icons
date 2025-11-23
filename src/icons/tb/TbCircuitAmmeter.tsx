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

export const TbCircuitAmmeter = (props: IconProps) => {
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
        <Path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M5 12H2M19 12h3" />
        <Path d="M10 14v-3c0-1.036.895-2 2-2s2 .964 2 2v3M14 12h-4" />
      </G>
    </Svg>
  );
};