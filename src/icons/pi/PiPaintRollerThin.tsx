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

export const PiPaintRollerThin = (props: IconProps) => {
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
        <Path d="M232 92h-20V64a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v28H16a4 4 0 0 0 0 8h20v28a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-28h20a4 4 0 0 1 4 4v50a4 4 0 0 1-2.9 3.84L132.7 186.5A12 12 0 0 0 124 198v34a4 4 0 0 0 8 0v-34a4 4 0 0 1 2.9-3.84l100.4-28.66A12 12 0 0 0 244 154v-50a12 12 0 0 0-12-12m-28 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h152a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};