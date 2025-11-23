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

export const CgArrowsMergeAltV = (props: IconProps) => {
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
        <Path fill="currentColor" d="M18 1.503v2h-5v4.172l1.829-1.829 1.414 1.415L12 11.503 7.757 7.261l1.415-1.415L11 7.675V3.503H6v-2zM18 20.497v2H6v-2h5v-4.172l-1.828 1.829-1.415-1.415L12 12.497l4.243 4.242-1.415 1.415L13 16.325v4.172z" />
      </G>
    </Svg>
  );
};