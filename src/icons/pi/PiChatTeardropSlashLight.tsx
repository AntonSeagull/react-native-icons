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

export const PiChatTeardropSlashLight = (props: IconProps) => {
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
        <Path d="M52.44 36a6 6 0 0 0-8.88 8l14.37 15.8A97.42 97.42 0 0 0 34 124v84a14 14 0 0 0 14 14h84a98.24 98.24 0 0 0 56.82-18.18L203.56 220a6 6 0 0 0 8.88-8.08ZM132 210H48a2 2 0 0 1-2-2v-84a85.46 85.46 0 0 1 20.08-55.2L180.7 194.88A84.9 84.9 0 0 1 132 210m98-86a97.86 97.86 0 0 1-14.06 50.61 6 6 0 0 1-5.15 2.9 6 6 0 0 1-5.12-9.1 86 86 0 0 0-110.88-122 6 6 0 1 1-5.2-10.81A97.1 97.1 0 0 1 132 26a98.11 98.11 0 0 1 98 98" />
      </G>
    </Svg>
  );
};