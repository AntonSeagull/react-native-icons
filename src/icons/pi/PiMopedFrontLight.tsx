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

export const PiMopedFrontLight = (props: IconProps) => {
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
        <Path d="M208 42h-42.48a38 38 0 0 0-75 0H48a6 6 0 0 0 0 12h42.48a38 38 0 0 0 14.71 24.37A62.09 62.09 0 0 0 66 136v64a14 14 0 0 0 14 14h18v2a30 30 0 0 0 60 0v-2h18a14 14 0 0 0 14-14v-64a62.09 62.09 0 0 0-39.19-57.63A38 38 0 0 0 165.52 54H208a6 6 0 0 0 0-12m-62 174a18 18 0 0 1-36 0v-48a18 18 0 0 1 36 0Zm32-80v64a2 2 0 0 1-2 2h-18v-34a30 30 0 0 0-60 0v34H80a2 2 0 0 1-2-2v-64a50 50 0 0 1 100 0m-50-62a26 26 0 1 1 26-26 26 26 0 0 1-26 26" />
      </G>
    </Svg>
  );
};