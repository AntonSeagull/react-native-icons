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

export const PiInfoLight = (props: IconProps) => {
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
        <Path d="M142 176a6 6 0 0 1-6 6 14 14 0 0 1-14-14v-40a2 2 0 0 0-2-2 6 6 0 0 1 0-12 14 14 0 0 1 14 14v40a2 2 0 0 0 2 2 6 6 0 0 1 6 6m-18-82a10 10 0 1 0-10-10 10 10 0 0 0 10 10m106 34A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90 90.1 90.1 0 0 0 90-90" />
      </G>
    </Svg>
  );
};