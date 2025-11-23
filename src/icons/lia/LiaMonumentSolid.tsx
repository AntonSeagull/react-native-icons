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

export const LiaMonumentSolid = (props: IconProps) => {
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
        <Path d="M16 4a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m0 4h-4v2h1.469l-.438 10H10v6H8v2h16v-2h-2v-6h-3.031l-.438-10H20V8Zm-.531 2h1.062l.438 10H15.03ZM12 22h8v4h-8Z" />
      </G>
    </Svg>
  );
};