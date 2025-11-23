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

export const HiBookOpen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 4.804A8 8 0 0 0 5.5 4c-1.255 0-2.443.29-3.5.804v10A8 8 0 0 1 5.5 14c1.669 0 3.218.51 4.5 1.385A7.96 7.96 0 0 1 14.5 14c1.255 0 2.443.29 3.5.804v-10A8 8 0 0 0 14.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 1 1-2 0z" />
      </G>
    </Svg>
  );
};