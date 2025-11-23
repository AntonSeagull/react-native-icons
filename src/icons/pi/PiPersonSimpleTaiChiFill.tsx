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

export const PiPersonSimpleTaiChiFill = (props: IconProps) => {
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
        <Path d="M96 48a32 32 0 1 1 32 32 32 32 0 0 1-32-32m120 48H40a8 8 0 0 0 0 16h80v28.44l-77.35 69.61A8 8 0 0 0 53.35 222l76.2-68.58L176 173.28V216a8 8 0 0 0 16 0v-48a8 8 0 0 0-4.85-7.35L136 138.72V112h80a8 8 0 0 0 0-16" />
      </G>
    </Svg>
  );
};