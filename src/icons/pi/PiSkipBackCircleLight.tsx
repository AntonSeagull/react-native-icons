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

export const PiSkipBackCircleLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m34.91-135.25a6 6 0 0 0-6.09.16L102 117.17V88a6 6 0 0 0-12 0v80a6 6 0 0 0 12 0v-29.17l54.82 34.26A6 6 0 0 0 166 168V88a6 6 0 0 0-3.09-5.25M154 157.17 107.32 128 154 98.83Z" />
      </G>
    </Svg>
  );
};