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

export const TbHandFingerLeft = (props: IconProps) => {
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
        <Path d="M12 8H3.5a1.5 1.5 0 0 0 0 3H11M10.5 11h-2a1.5 1.5 0 1 0 0 3H11M9.5 14a1.5 1.5 0 0 0 0 3H11" />
        <Path d="M10.5 17a1.5 1.5 0 0 0 0 3H15a6 6 0 0 0 6-6v-2 .208a6 6 0 0 0-2.7-5.012L18 7q-.718-.468-5.728-3.286a1.5 1.5 0 0 0-2.022.536 1.87 1.87 0 0 0 .28 2.28L12 8" />
      </G>
    </Svg>
  );
};