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

export const FcEditImage = (props: IconProps) => {
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
        <Path fill="#8CBCD6" d="M31 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v17c0 7.2-5.8 13-13 13" />
        <Circle cx={35} cy={16} r={3} fill="#B3DDF5" />
        <Path fill="#9AC9E3" d="M20 16 9 32h22z" />
        <Path fill="#B3DDF5" d="m31 22-8 10h16z" />
        <Path fill="#E57373" d="m47.7 29.1-2.8-2.8c-.4-.4-1.1-.4-1.6 0L42 27.6l4.4 4.4 1.3-1.3c.4-.4.4-1.1 0-1.6" />
        <Path fill="#FF9800" d="M27.467 42.167 39.77 29.865l4.384 4.384L31.85 46.55z" />
        <Path fill="#B0BEC5" d="m46.4 32.038-2.192 2.192-4.383-4.384 2.191-2.192z" />
        <Path fill="#FFC107" d="M27.5 42.2 26 48l5.8-1.5z" />
        <Path fill="#37474F" d="m26.7 45-.7 3 3-.7z" />
      </G>
    </Svg>
  );
};