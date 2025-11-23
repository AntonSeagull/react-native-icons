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

export const FcRegisteredTrademark = (props: IconProps) => {
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
        <Circle cx={24} cy={24} r={21} fill="#9C27B0" />
        <Path fill="#E1BEE7" d="M25 26.8h-4.5v9h-4V12.5h8.2c1.3 0 2.5.2 3.6.5 1 .3 1.9.8 2.6 1.3.7.6 1.3 1.3 1.6 2.2s.6 1.9.6 3c0 1.6-.4 2.9-1.1 3.9-.8 1-1.8 1.9-3.1 2.4l5.2 9.7v.2h-4.3zm-4.5-3.2h4.2c.7 0 1.4-.1 1.9-.3s1-.5 1.4-.8.6-.7.8-1.2.3-1 .3-1.6-.1-1.1-.3-1.6-.4-.9-.8-1.2-.8-.6-1.4-.8c-.5-.2-1.2-.3-2-.3h-4.1z" />
      </G>
    </Svg>
  );
};