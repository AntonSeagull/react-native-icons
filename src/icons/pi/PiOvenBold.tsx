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

export const PiOvenBold = (props: IconProps) => {
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
        <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM68 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16m44 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16m44 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16M76 192h104a12 12 0 0 0 12-12v-60a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12m12-60h80v36H88Z" />
      </G>
    </Svg>
  );
};