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

export const VscCloud = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M11.957 6h.05a3 3 0 0 1 2.116.879 3.003 3.003 0 0 1 0 4.242 3 3 0 0 1-2.117.879v-.013L12 12H4.523a3.49 3.49 0 0 1-2.628-1.16 3.502 3.502 0 0 1 1.958-5.78 3.5 3.5 0 0 1 1.468.04 3.486 3.486 0 0 1 3.657-2.06A3.48 3.48 0 0 1 11.957 6M5 11h7.01a1.994 1.994 0 0 0 1.992-2 2 2 0 0 0-1.996-2h-.914l-.123-.857a2.49 2.49 0 0 0-2.126-2.122A2.48 2.48 0 0 0 6.231 5.5l-.333.762-.809-.189A2.5 2.5 0 0 0 4.523 6c-.662 0-1.297.263-1.764.732A2.503 2.503 0 0 0 4.523 11z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};