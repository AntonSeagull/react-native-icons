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

export const PiStackSimpleThin = (props: IconProps) => {
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
        <Path d="m14 107.47 112 64a4 4 0 0 0 4 0l112-64a4 4 0 0 0 0-6.94l-112-64a4 4 0 0 0-4 0l-112 64a4 4 0 0 0 0 6.94m114-62.86L231.94 104 128 163.39 24.06 104ZM243.47 142a4 4 0 0 1-1.49 5.45l-112 64a4 4 0 0 1-4 0l-112-64a4 4 0 0 1 4-6.94l110 62.86 110-62.86a4 4 0 0 1 5.49 1.49" />
      </G>
    </Svg>
  );
};