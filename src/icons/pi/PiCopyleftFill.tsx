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

export const PiCopyleftFill = (props: IconProps) => {
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
        <Path d="M128 56a72 72 0 1 0 72 72 72.08 72.08 0 0 0-72-72m0 120a47.66 47.66 0 0 1-38.4-19.19 8 8 0 0 1 12.8-9.61 32 32 0 1 0 0-38.4 8 8 0 0 1-12.8-9.61A48 48 0 1 1 128 176m0-152a104 104 0 1 0 104 104A104 104 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88" />
      </G>
    </Svg>
  );
};