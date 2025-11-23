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

export const PiFlagThin = (props: IconProps) => {
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
        <Path d="M45.39 53.06a4 4 0 0 0-1.39 3V224a4 4 0 0 0 8 0v-46.13c29.41-24.39 55.08-11.69 82.23 1.73 16.5 8.17 33.33 16.5 51.13 16.5 13.14 0 26.81-4.55 41.26-17.06a4 4 0 0 0 1.38-3v-120a4 4 0 0 0-6.62-3c-30 26-56 13.07-83.61-.57-28.7-14.19-58.37-28.85-92.38.59M220 174.17c-29.41 24.4-55.08 11.7-82.23-1.73-26.82-13.27-54.5-27-85.77-4.66V57.92c29.41-24.4 55.08-11.7 82.23 1.73 26.82 13.27 54.5 27 85.77 4.66Z" />
      </G>
    </Svg>
  );
};