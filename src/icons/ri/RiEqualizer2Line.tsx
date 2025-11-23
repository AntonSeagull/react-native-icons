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

export const RiEqualizer2Line = (props: IconProps) => {
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
        <Path d="M5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M12 8h8V6h-8zm4 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M4 16v2h8v-2z" />
      </G>
    </Svg>
  );
};