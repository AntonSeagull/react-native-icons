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

export const PiStudentThin = (props: IconProps) => {
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
        <Path d="m225.27 60.21-96-32a4 4 0 0 0-2.54 0l-96 32A4 4 0 0 0 28 64v80a4 4 0 0 0 8 0V69.55l43.88 14.63a60 60 0 0 0 24.54 91c-20.86 5.74-39 19.13-51.77 38.65a4 4 0 0 0 6.7 4.36C75.17 193.92 100.2 180 128 180s52.83 13.92 68.65 38.18a4 4 0 0 0 6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60 60 0 0 0 24.54-91l49.15-16.39a4 4 0 0 0 0-7.58ZM180 120a52 52 0 1 1-92.07-33.14l38.8 12.93a3.95 3.95 0 0 0 2.54 0l38.8-12.93A51.85 51.85 0 0 1 180 120m-52-28.22L44.65 64 128 36.22 211.35 64Z" />
      </G>
    </Svg>
  );
};