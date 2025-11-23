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

export const PiWifiMediumThin = (props: IconProps) => {
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
        <Path d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8m66.48-78.09a120 120 0 0 0-149 0 4 4 0 0 0 5 6.27 112 112 0 0 1 139 0 4 4 0 0 0 5-6.27m-32.13 35.86a72 72 0 0 0-84.7 0 4 4 0 1 0 4.71 6.46 64 64 0 0 1 75.28 0 4 4 0 1 0 4.71-6.46" />
      </G>
    </Svg>
  );
};