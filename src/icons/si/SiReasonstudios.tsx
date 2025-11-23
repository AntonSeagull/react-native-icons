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

export const SiReasonstudios = (props: IconProps) => {
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
        <Path d="m2.49 5.114 8.3-4.79a2.42 2.42 0 0 1 2.39-.017l.03.017 8.299 4.79a2.42 2.42 0 0 1 1.211 2.065v9.611a2.42 2.42 0 0 1-1.184 2.08l-.027.016-8.299 4.79a2.42 2.42 0 0 1-2.39.017l-.03-.017-8.3-4.79a2.42 2.42 0 0 1-1.21-2.065V7.21c0-.855.45-1.645 1.184-2.08zl8.3-4.79zM12 4.026 5.092 8.013v7.974L12 19.974V12l6.908-3.987z" />
      </G>
    </Svg>
  );
};