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

export const CgArrowsBreakeH = (props: IconProps) => {
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
        <Path fill="currentColor" d="M9.243 7h2v4h.005v2h-.005v4h-2v-4H4.828l1.829 1.828-1.414 1.415L1 12l4.243-4.243 1.414 1.415L4.828 11h4.415zM15.253 7h-2v4h-.005v2h.005v4h2v-4h4.414l-1.829 1.829 1.415 1.414L23.495 12l-4.242-4.243-1.415 1.415L19.668 11h-4.414z" />
      </G>
    </Svg>
  );
};