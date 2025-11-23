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

export const FcFlashAuto = (props: IconProps) => {
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
        <Path fill="#F44336" d="M40.8 14.5h-4.3l-.9 2.5H33l4.5-12h2.3l4.5 12h-2.6zm-3.7-2h3L38.6 8z" />
      </G>
    </Svg>
  );
};