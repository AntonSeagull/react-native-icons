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

export const PiSailboatDuotone = (props: IconProps) => {
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
        <Path d="m240 176-29.6 37a8 8 0 0 1-6.24 3H51.84a8 8 0 0 1-6.24-3L16 176ZM136 8 32 136h104Z" opacity={0.2} />
        <Path d="M247.21 172.53A8 8 0 0 0 240 168h-96v-24h72a8 8 0 0 0 5.92-13.38L144 44.91V8a8 8 0 0 0-14.21-5l-104 128A8 8 0 0 0 32 144h96v24H16a8 8 0 0 0-6.25 13l29.6 37a15.93 15.93 0 0 0 12.49 6h152.32a15.93 15.93 0 0 0 12.49-6l29.6-37a8 8 0 0 0 .96-8.47M197.92 128H144V68.69Zm-149.11 0L128 30.53V128Zm155.35 80H51.84l-19.2-24h190.72Z" />
      </G>
    </Svg>
  );
};