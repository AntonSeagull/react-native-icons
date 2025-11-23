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

export const GrApps = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M19 5h2V3h-2zm-8 0h2V3h-2zM3 5h2V3H3zm16 8h2v-2h-2zm-8 0h2v-2h-2zm-8 0h2v-2H3zm16 8h2v-2h-2zm-8 0h2v-2h-2zm-8 0h2v-2H3z" />
      </G>
    </Svg>
  );
};