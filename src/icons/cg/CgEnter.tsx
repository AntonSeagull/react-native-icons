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

export const CgEnter = (props: IconProps) => {
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
        <Path fill="currentColor" d="M20 5H8v4H6V3h16v18H6v-6h2v4h12z" />
        <Path fill="currentColor" d="m13.074 16.95-1.414-1.414L14.196 13H2v-2h12.196L11.66 8.465l1.414-1.415 4.95 4.95z" />
      </G>
    </Svg>
  );
};