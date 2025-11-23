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

export const LiaSteam = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11c-5.109 0-9.401-3.506-10.633-8.234l3.666 1.57A2.99 2.99 0 0 0 12 23a3 3 0 0 0 3-3c0-.032-.009-.063-.01-.094l4.178-2.922A3.99 3.99 0 0 0 23 13a4 4 0 0 0-4-4 3.99 3.99 0 0 0-3.982 3.832l-2.924 4.178c-.032-.001-.062-.01-.094-.01-.663 0-1.27.222-1.768.586l-5.199-2.229C5.37 9.592 10.152 5 16 5m3 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 0 0 0 4 2 2 0 0 0 0-4m-7 7a2 2 0 1 1-1.816 2.828l.783.336a1.503 1.503 0 0 0 1.97-.787 1.5 1.5 0 0 0-.789-1.969l-.728-.312c.185-.057.377-.096.58-.096" />
      </G>
    </Svg>
  );
};