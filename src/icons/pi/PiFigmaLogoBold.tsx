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

export const PiFigmaLogoBold = (props: IconProps) => {
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
        <Path d="M198.15 96A44 44 0 0 0 168 20H96a44 44 0 0 0-30.15 76 43.9 43.9 0 0 0 1.23 65.12A48 48 0 1 0 148 196v-28.83A44 44 0 0 0 198.15 96M188 64a20 20 0 0 1-20 20h-20V44h20a20 20 0 0 1 20 20M76 64a20 20 0 0 1 20-20h28v40H96a20 20 0 0 1-20-20m20 84a20 20 0 0 1 0-40h28v40zm28 48a24 24 0 1 1-24-24h24Zm44-48a20 20 0 1 1 20-20 20 20 0 0 1-20 20" />
      </G>
    </Svg>
  );
};