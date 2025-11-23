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

export const LiaConciergeBellSolid = (props: IconProps) => {
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
        <Path d="M13 6v2h6V6Zm3 3C9.703 9 4.574 13.84 4.063 20H2v5h28v-5h-2.062C27.426 13.84 22.297 9 16 9m0 2a9.927 9.927 0 0 1 9.938 9H6.063c.492-5.086 4.71-9 9.937-9M4 22h24v1H4Z" />
      </G>
    </Svg>
  );
};