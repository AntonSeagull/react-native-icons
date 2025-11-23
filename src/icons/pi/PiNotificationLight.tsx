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

export const PiNotificationLight = (props: IconProps) => {
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
        <Path d="M214 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v152a2 2 0 0 0 2 2h152a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0m16-68a34 34 0 1 1-34-34 34 34 0 0 1 34 34m-12 0a22 22 0 1 0-22 22 22 22 0 0 0 22-22" />
      </G>
    </Svg>
  );
};