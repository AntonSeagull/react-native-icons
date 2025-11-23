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

export const RiFilterOffFill = (props: IconProps) => {
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
        <Path d="M6.929.515 21.07 14.657l-1.414 1.414-3.823-3.822L14 14.999v7h-4v-7L4 6H3V4h4.585l-2.07-2.07zM21 4v2h-1l-1.915 2.872L13.213 4z" />
      </G>
    </Svg>
  );
};