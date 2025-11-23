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

export const LiaArtstation = (props: IconProps) => {
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
        <Path d="M13.73 5 26 27l1.994-4.512a3 3 0 0 0-.123-2.908L20.096 6.436A3 3 0 0 0 17.536 5zm-2.218 2.178L5.63 18h11.916zM4 21l2.172 4.342A3 3 0 0 0 8.854 27h13.712l-3.345-6z" />
      </G>
    </Svg>
  );
};