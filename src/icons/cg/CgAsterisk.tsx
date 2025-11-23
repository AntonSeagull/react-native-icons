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

export const CgAsterisk = (props: IconProps) => {
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
        <Path fill="currentColor" d="M11 6h2v4.079l3.341-2.34 1.147 1.639L13.743 12l3.745 2.622-1.147 1.639L13 13.92V18h-2v-4.079l-3.341 2.34-1.148-1.639L10.257 12 6.51 9.378 7.66 7.739 11 10.08z" />
      </G>
    </Svg>
  );
};