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

export const PiCloudFogDuotone = (props: IconProps) => {
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
        <Path d="M224 100a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 100" opacity={0.2} />
        <Path d="M120 208H72a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m64-16h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m-24 32h-56a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104 53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 100m-16 0a60.06 60.06 0 0 0-120-3.54 8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 88a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60" />
      </G>
    </Svg>
  );
};