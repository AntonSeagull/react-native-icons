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

export const WiDirectionUpLeft = (props: IconProps) => {
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
        <Path d="M10.03 14.31V9.84q0-.45.3-.75c.3-.3.45-.3.74-.3h4.48c.29 0 .54.1.74.3s.3.45.3.75c0 .29-.1.53-.3.73s-.45.29-.74.29H13.6l6.06 6.06c.18.21.26.46.26.78 0 .29-.09.53-.26.72-.2.19-.46.28-.79.28-.3 0-.55-.09-.73-.28l-6.02-6.05v1.95q0 .45-.3.75t-.75.3c-.29 0-.54-.1-.74-.31s-.3-.46-.3-.75" />
      </G>
    </Svg>
  );
};