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

export const PiFunnelBold = (props: IconProps) => {
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
        <Path d="M234.29 47.91A20 20 0 0 0 216 36H40a20 20 0 0 0-14.8 33.45l.12.14L92 140.75V216a20 20 0 0 0 31.1 16.64l32-21.33a20 20 0 0 0 8.9-16.65v-53.91l66.67-71.16.12-.14a20 20 0 0 0 3.5-21.54m-91 79.89A12 12 0 0 0 140 136v56.52l-24 16V136a12 12 0 0 0-3.25-8.2L49.23 60h157.54Z" />
      </G>
    </Svg>
  );
};