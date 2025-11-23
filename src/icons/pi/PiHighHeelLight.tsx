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

export const PiHighHeelLight = (props: IconProps) => {
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
        <Path d="M230.53 158.14 179 146.53 68.24 35.76a6 6 0 0 0-8.67.19C37.92 59.62 26 89.47 26 120v72a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-52.35a115 115 0 0 1 51.74 57.69 13.92 13.92 0 0 0 13 8.66H240a14 14 0 0 0 14-14v-4.73a29.73 29.73 0 0 0-23.47-29.13M74 192a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-65.82A112.8 112.8 0 0 1 74 134Zm168 0a2 2 0 0 1-2 2h-89.28a2 2 0 0 1-1.86-1.18 126.53 126.53 0 0 0-45.58-56.65 125.13 125.13 0 0 0-65.12-22c1.31-23.51 10.44-46.34 26.15-65.38l107.45 107.45a6 6 0 0 0 2.92 1.61l53.23 12A17.81 17.81 0 0 1 242 187.31Z" />
      </G>
    </Svg>
  );
};