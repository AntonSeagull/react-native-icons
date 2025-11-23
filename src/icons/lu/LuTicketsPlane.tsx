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

export const LuTicketsPlane = (props: IconProps) => {
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
        <Path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12M12 13.5l3.75.5M4.5 8l10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8M6 14v1M6 19v2" />
        <Rect width={20} height={13} x={2} y={8} rx={2} />
      </G>
    </Svg>
  );
};