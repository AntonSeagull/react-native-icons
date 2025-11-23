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

export const PiCurrencyDollarFill = (props: IconProps) => {
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
        <Path d="M160 152a16 16 0 0 1-16 16h-8v-32h8a16 16 0 0 1 16 16m72-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-56 24a32 32 0 0 0-32-32h-8V88h4a16 16 0 0 1 16 16 8 8 0 0 0 16 0 32 32 0 0 0-32-32h-4v-8a8 8 0 0 0-16 0v8h-4a32 32 0 0 0 0 64h4v32h-8a16 16 0 0 1-16-16 8 8 0 0 0-16 0 32 32 0 0 0 32 32h8v8a8 8 0 0 0 16 0v-8h8a32 32 0 0 0 32-32m-76-48a16 16 0 0 0 16 16h4V88h-4a16 16 0 0 0-16 16" />
      </G>
    </Svg>
  );
};