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

export const PiVideoConferenceBold = (props: IconProps) => {
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
        <Path d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 80h-56V60h56Zm-160 4a12 12 0 1 1 12 12 12 12 0 0 1-12-12m-8 49.77C46.69 161.84 55 156 64 156c9.43 0 18.19 6.44 20.38 15a12 12 0 0 0 23.24-6 43.22 43.22 0 0 0-15.16-23A36 36 0 0 0 44 90.08V60h88v136H44ZM156 196v-56h56v56Zm12-108a16 16 0 1 1 16 16 16 16 0 0 1-16-16m32 80a16 16 0 1 1-16-16 16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};