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

export const LiaVectorSquareSolid = (props: IconProps) => {
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
        <Path d="M5 5v7h2v8H5v7h7v-2h8v2h7v-7h-2v-8h2V5h-7v2h-8V5zm2 2h3v3H7zm15 0h3v3h-3zM12 9h8v3h3v8h-3v3h-8v-3H9v-8h3zM7 22h3v3H7zm15 0h3v3h-3z" />
      </G>
    </Svg>
  );
};