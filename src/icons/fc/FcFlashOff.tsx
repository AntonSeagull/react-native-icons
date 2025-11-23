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

export const FcFlashOff = (props: IconProps) => {
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
        <Path fill="#FFC107" d="M33 22h-9.4L30 5H19l-6 21h8.6L17 45z" />
        <Path fill="#37474F" d="M3.563 6.396 6.39 3.568l37.966 37.966-2.828 2.828z" />
      </G>
    </Svg>
  );
};