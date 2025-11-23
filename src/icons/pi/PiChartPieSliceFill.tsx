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

export const PiChartPieSliceFill = (props: IconProps) => {
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
        <Path d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117 8 8 0 0 0 4.52 5.81 7.9 7.9 0 0 0 3.35.74 8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38M232 128a104 104 0 0 1-193.68 52.7 8 8 0 0 1 2.87-11L120 123.83V32a8 8 0 0 1 8-8 104.05 104.05 0 0 1 89.74 51.48c.11.16.21.32.31.49s.2.37.29.55A103.34 103.34 0 0 1 232 128" />
      </G>
    </Svg>
  );
};