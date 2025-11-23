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

export const PiHairDryerThin = (props: IconProps) => {
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
        <Path d="M196 88a28 28 0 1 0-28 28 28 28 0 0 0 28-28m-28 20a20 20 0 1 1 20-20 20 20 0 0 1-20 20m-5.15 104a12 12 0 0 0 10.92-7l32-70.39A60 60 0 0 0 168 28a5 5 0 0 0-.66.05L30 50.94a12 12 0 0 0-10 11.84v50.44a12 12 0 0 0 10 11.84l102 17V200a12 12 0 0 0 12 12h4v4a36 36 0 0 0 36 36h16a4 4 0 0 0 0-8h-16a28 28 0 0 1-28-28v-4ZM28 113.22V62.78a4 4 0 0 1 3.34-4L168.33 36a52 52 0 0 1 0 104l-137-22.83a4 4 0 0 1-3.33-3.95M140 200v-56.61l27.34 4.61a5 5 0 0 0 .66.05 59.6 59.6 0 0 0 25.46-5.69l-27 59.34a4 4 0 0 1-3.64 2.35H144a4 4 0 0 1-4-4.05" />
      </G>
    </Svg>
  );
};