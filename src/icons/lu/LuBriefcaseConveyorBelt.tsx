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

export const LuBriefcaseConveyorBelt = (props: IconProps) => {
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
        <Path d="M10 20v2M14 20v2M18 20v2M21 20H3M6 20v2M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
        <Rect width={16} height={10} x={4} y={6} rx={2} />
      </G>
    </Svg>
  );
};