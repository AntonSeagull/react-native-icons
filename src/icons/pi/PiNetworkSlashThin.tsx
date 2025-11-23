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

export const PiNetworkSlashThin = (props: IconProps) => {
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
        <Path d="M100 54V40a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12h-16.39a4 4 0 0 1 0-8H144a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v14a4 4 0 0 1-8 0m111 159.31a4 4 0 1 1-5.92 5.38L119 124H68v40h12a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12h12v-40H24a4 4 0 0 1 0-8h87.68L45 42.69a4 4 0 0 1 6-5.38ZM80 172H48a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4v-32a4 4 0 0 0-4-4m152-56h-68a4 4 0 0 0 0 8h24v26.83a4 4 0 1 0 8 0V124h36a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};