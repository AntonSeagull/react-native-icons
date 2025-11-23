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

export const PiAlarmLight = (props: IconProps) => {
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
        <Path d="M128 42a94 94 0 1 0 94 94 94.11 94.11 0 0 0-94-94m0 176a82 82 0 1 1 82-82 82.1 82.1 0 0 1-82 82M60.24 36.24l-32 32a6 6 0 1 1-8.48-8.48l32-32a6 6 0 1 1 8.48 8.48m176 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48M184 130a6 6 0 0 1 0 12h-56a6 6 0 0 1-6-6V80a6 6 0 0 1 12 0v50Z" />
      </G>
    </Svg>
  );
};