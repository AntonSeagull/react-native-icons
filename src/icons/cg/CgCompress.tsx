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

export const CgCompress = (props: IconProps) => {
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
        <Path fill="currentColor" d="m19.095 8.43-1.424-1.404-4.914 4.985 4.985 4.914 1.404-1.424-2.502-2.467 6.497.05.016-2-6.628-.05zM5.467 15.562l1.416 1.412 4.944-4.956-4.956-4.943L5.459 8.49l2.591 2.585-7.206.024.006 2 7.097-.024z" />
      </G>
    </Svg>
  );
};