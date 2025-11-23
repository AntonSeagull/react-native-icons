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

export const CgArrowsH = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5.657 9.172 4.243 7.757 0 12l4.243 4.243 1.414-1.415L3.829 13H10v-2H3.83zM14 11v2h6.172l-1.829 1.828 1.414 1.415L24 12l-4.243-4.243-1.414 1.415L20.172 11z" />
      </G>
    </Svg>
  );
};