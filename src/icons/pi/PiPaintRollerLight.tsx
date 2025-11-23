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

export const PiPaintRollerLight = (props: IconProps) => {
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
        <Path d="M232 90h-18V64a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v26H16a6 6 0 0 0 0 12h18v26a14 14 0 0 0 14 14h152a14 14 0 0 0 14-14v-26h18a2 2 0 0 1 2 2v50a2 2 0 0 1-1.45 1.92l-100.4 28.68A14.06 14.06 0 0 0 122 198v34a6 6 0 0 0 12 0v-34a2 2 0 0 1 1.45-1.92l100.4-28.68A14.06 14.06 0 0 0 246 154v-50a14 14 0 0 0-14-14m-30 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h152a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};