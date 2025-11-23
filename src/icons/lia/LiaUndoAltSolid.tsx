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

export const LiaUndoAltSolid = (props: IconProps) => {
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
        <Path d="M16 3C12 3 8.4 4.8 6 7.7V4H4v8h8v-2H6.8c2-3 5.3-5 9.2-5 6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16H3c0 7.2 5.8 13 13 13s13-5.8 13-13S23.2 3 16 3" />
      </G>
    </Svg>
  );
};