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

export const RiPuzzle2Line = (props: IconProps) => {
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
        <Path d="M7 5a4 4 0 1 1 8 0h5a1 1 0 0 1 1 1v4.17a1 1 0 0 1-1.333.944 2 2 0 1 0 0 3.773 1 1 0 0 1 1.333.942V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h14v-2a4 4 0 0 1 0-8V7h-5.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2" />
      </G>
    </Svg>
  );
};