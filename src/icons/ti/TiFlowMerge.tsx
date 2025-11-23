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

export const TiFlowMerge = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M18 16.184v-1.851c0-1.93-1.57-3.5-3.5-3.5-.827 0-1.5-.673-1.5-1.5V7.816A3 3 0 0 0 15 5c0-1.654-1.346-3-3-3S9 3.346 9 5c0 1.302.839 2.401 2 2.815v1.518c0 .827-.673 1.5-1.5 1.5-1.93 0-3.5 1.57-3.5 3.5v1.851A3 3 0 0 0 4 19c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816v-1.851c0-.827.673-1.5 1.5-1.5.979 0 1.864-.407 2.5-1.058a3.49 3.49 0 0 0 2.5 1.058c.827 0 1.5.673 1.5 1.5v1.851A3 3 0 0 0 14 19c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816M7 20a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m5-16a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m5 16a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2" />
      </G>
    </Svg>
  );
};