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

export const PiTextHThreeLight = (props: IconProps) => {
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
        <Path d="M246 180a34 34 0 0 1-58.29 23.79 6 6 0 0 1 8.58-8.39A22 22 0 1 0 212 158a6 6 0 0 1-4.92-9.44l21.4-30.56H192a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 9.44l-22.52 32.18A34.06 34.06 0 0 1 246 180M144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};