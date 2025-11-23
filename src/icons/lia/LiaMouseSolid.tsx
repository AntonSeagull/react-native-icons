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

export const LiaMouseSolid = (props: IconProps) => {
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
        <Path d="M16 4C10.488 4 6 8.488 6 14v4c0 5.512 4.488 10 10 10s10-4.488 10-10v-4c0-5.512-4.488-10-10-10m-1 2.063V13H8.063A7.994 7.994 0 0 1 15 6.063m2 0A7.994 7.994 0 0 1 23.938 13H17ZM8 15h16v3c0 4.43-3.57 8-8 8s-8-3.57-8-8Z" />
      </G>
    </Svg>
  );
};