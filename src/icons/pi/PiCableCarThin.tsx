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

export const PiCableCarThin = (props: IconProps) => {
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
        <Path d="M243.94 31.3a4 4 0 0 0-4.64-3.24l-224 40A4 4 0 0 0 16 76a4 4 0 0 0 .7-.06L124 56.78V100H64a28 28 0 0 0-28 28v64a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28v-64a28 28 0 0 0-28-28h-60V55.35l108.7-19.41a4 4 0 0 0 3.24-4.64M100 164v-56h56v56Zm-36-56h28v56H44v-36a20 20 0 0 1 20-20m128 104H64a20 20 0 0 1-20-20v-20h168v20a20 20 0 0 1-20 20m20-84v36h-48v-56h28a20 20 0 0 1 20 20" />
      </G>
    </Svg>
  );
};