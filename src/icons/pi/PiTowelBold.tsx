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

export const PiTowelBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M197.16 20H72a28 28 0 0 0-28 28v168a20 20 0 0 0 20 20h104a20 20 0 0 0 20-20V52a8 8 0 0 1 8-8h.35a8.33 8.33 0 0 1 7.7 8.48V148a12 12 0 0 0 24 0V52.48A32.13 32.13 0 0 0 197.16 20M72 44h93a32.2 32.2 0 0 0-1 8v120H68V48a4 4 0 0 1 4-4m-4 168v-16h96v16Z" />
      </G>
    </Svg>
  );
};