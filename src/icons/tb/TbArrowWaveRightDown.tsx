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

export const TbArrowWaveRightDown = (props: IconProps) => {
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
        <Path d="M17 14h4v-4" />
        <Path d="M3 12c.887 1.284 2.48 2.033 4 2 1.52.033 3.113-.716 4-2s2.48-2.033 4-2c1.52-.033 3 1 4 2l2 2" />
      </G>
    </Svg>
  );
};