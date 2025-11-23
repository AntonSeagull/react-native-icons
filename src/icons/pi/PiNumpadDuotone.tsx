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

export const PiNumpadDuotone = (props: IconProps) => {
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
        <Path d="M192 48v152a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V48Z" opacity={0.2} />
        <Path d="M80 48a16 16 0 1 1-16-16 16 16 0 0 1 16 16m48-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m64 32a16 16 0 1 0-16-16 16 16 0 0 0 16 16M64 88a16 16 0 1 0 16 16 16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16M64 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16m64 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16m0 56a16 16 0 1 0 16 16 16 16 0 0 0-16-16m64-56a16 16 0 1 0 16 16 16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};