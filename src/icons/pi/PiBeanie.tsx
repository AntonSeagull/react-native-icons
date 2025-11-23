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

export const PiBeanie = (props: IconProps) => {
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
        <Path d="M224 162.16V144a96.18 96.18 0 0 0-72.34-93 28 28 0 1 0-47.32 0A96.18 96.18 0 0 0 32 144v18.16A16 16 0 0 0 24 176v32a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-8-13.84M116 36a12 12 0 1 1 12 12 12 12 0 0 1-12-12m12 28a80.09 80.09 0 0 1 80 80v16H48v-16a80.09 80.09 0 0 1 80-80m-8 112v32H80v-32Zm16 0h40v32h-40Zm-96 0h24v32H40Zm176 32h-24v-32h24z" />
      </G>
    </Svg>
  );
};