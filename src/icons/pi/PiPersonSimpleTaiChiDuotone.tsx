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

export const PiPersonSimpleTaiChiDuotone = (props: IconProps) => {
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
        <Path d="M152 48a24 24 0 1 1-24-24 24 24 0 0 1 24 24" opacity={0.2} />
        <Path d="M128 80a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16m96 72a8 8 0 0 1-8 8h-80v26.72l51.15 21.93A8 8 0 0 1 192 168v48a8 8 0 0 1-16 0v-42.72l-46.45-19.91L53.35 222a8 8 0 1 1-10.7-11.9L120 140.44V112H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};