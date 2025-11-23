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

export const CgAssign = (props: IconProps) => {
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
        <Path fill="currentColor" d="M6 6h4V4H4v6h2zM10 18H6v-4H4v6h6zM14 6h4v4h2V4h-6zM14 18h4v-4h2v6h-6zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
      </G>
    </Svg>
  );
};