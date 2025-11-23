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

export const PiInfoThin = (props: IconProps) => {
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
        <Path d="M140 176a4 4 0 0 1-4 4 12 12 0 0 1-12-12v-40a4 4 0 0 0-4-4 4 4 0 0 1 0-8 12 12 0 0 1 12 12v40a4 4 0 0 0 4 4 4 4 0 0 1 4 4m-16-84a8 8 0 1 0-8-8 8 8 0 0 0 8 8m104 36A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92" />
      </G>
    </Svg>
  );
};