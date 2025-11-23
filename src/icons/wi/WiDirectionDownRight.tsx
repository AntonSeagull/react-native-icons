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

export const WiDirectionDownRight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.04 10.08c0-.3.09-.55.26-.73.2-.19.46-.28.79-.28.3 0 .55.09.73.28l6.05 6.05v-1.95q0-.45.3-.75c.3-.3.45-.3.75-.3.29 0 .54.1.74.31s.3.45.3.75v4.48q0 .45-.3.75c-.3.3-.45.3-.74.3h-4.48c-.29 0-.54-.1-.74-.3s-.3-.45-.3-.75c0-.29.1-.54.3-.73s.45-.29.74-.29h1.93l-6.08-6.06a1.32 1.32 0 0 1-.25-.78" />
      </G>
    </Svg>
  );
};