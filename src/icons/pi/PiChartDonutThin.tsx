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

export const PiChartDonutThin = (props: IconProps) => {
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
        <Path d="M128 28a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4 36 36 0 1 1-31.18 18 4 4 0 0 0-1.47-5.47l-48.5-28A4 4 0 0 0 41.39 78 100 100 0 1 0 128 28M46.38 85.5l41.67 24a43.86 43.86 0 0 0-3.4 25.93l-46.47 12.5a92.2 92.2 0 0 1 8.2-62.43m-6.13 70.15 46.46-12.45A44.11 44.11 0 0 0 124 171.81v48.1a92.17 92.17 0 0 1-83.75-64.26M132 219.91v-48.1a44 44 0 0 0 0-87.63V36.09a92 92 0 0 1 0 183.82" />
      </G>
    </Svg>
  );
};