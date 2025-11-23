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

export const FcMultipleCameras = (props: IconProps) => {
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
        <Path fill="#455A64" d="M42 41H12c-2.2 0-4-1.8-4-4V17c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4" />
        <Path fill="#78909C" d="M36 36H6c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4" />
        <Circle cx={26} cy={22} r={10} fill="#455A64" />
        <Circle cx={26} cy={22} r={7} fill="#42A5F5" />
        <Path fill="#90CAF9" d="M29.7 19.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4s1 .3 1.4-.1c1.2-1.3 3.3-1.3 4.5 0 .2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3" />
        <Path fill="#ADD8FB" d="M6 12h6v3H6z" />
      </G>
    </Svg>
  );
};