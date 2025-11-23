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

export const PiChartPieLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m74.74 51.92L134 117.61V38.2a90 90 0 0 1 68.74 39.72M122 38.2v86.34L47.24 167.7A90 90 0 0 1 122 38.2m6 179.8a90 90 0 0 1-74.74-39.92l155.5-89.78A90 90 0 0 1 128 218" />
      </G>
    </Svg>
  );
};