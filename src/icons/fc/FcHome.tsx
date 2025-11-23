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

export const FcHome = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#E8EAF6" d="M42 39H6V23L24 6l18 17z" />
        <Path d="m39 21-5-5V9h5zM6 39h36v5H6z" />
        <Path fill="#B71C1C" d="M24 4.3 4 22.9l2 2.2L24 8.4l18 16.7 2-2.2z" />
        <Path fill="#D84315" d="M18 28h12v16H18z" />
        <Path fill="#01579B" d="M21 17h6v6h-6z" />
        <Path fill="#FF8A65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5" />
      </G>
    </Svg>
  );
};