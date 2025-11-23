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

export const PiWaveformFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 152a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 32a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 8a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};