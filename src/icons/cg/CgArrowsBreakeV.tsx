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

export const CgArrowsBreakeV = (props: IconProps) => {
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
        <Path fill="currentColor" d="m16.243 5.243-1.414 1.414L13 4.828v4.415h4v2H7v-2h4V4.828L9.172 6.657 7.757 5.243 12 1zM7 15.253v-2h10v2h-4v4.414l1.828-1.829 1.415 1.415L12 23.495l-4.243-4.242 1.415-1.415L11 19.668v-4.414z" />
      </G>
    </Svg>
  );
};