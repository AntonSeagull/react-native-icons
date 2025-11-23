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

export const TbHandFingerRight = (props: IconProps) => {
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
        <Path d="M12 8h8.5a1.5 1.5 0 0 1 0 3H13M13.5 11h2a1.5 1.5 0 0 1 0 3H13M14.5 14a1.5 1.5 0 0 1 0 3H13" />
        <Path d="M13.5 17a1.5 1.5 0 1 1 0 3H9a6 6 0 0 1-6-6v-2 .208a6 6 0 0 1 2.7-5.012L6 7q.718-.468 5.728-3.286a1.5 1.5 0 0 1 2.022.536c.44.734.325 1.674-.28 2.28L12 8" />
      </G>
    </Svg>
  );
};