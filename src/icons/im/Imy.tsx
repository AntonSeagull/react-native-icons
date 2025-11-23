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

export const Imy = (props: IconProps) => {
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
        <Path d="M15.331 2.502C13.087 2.179 10.607 2 8 2s-5.087.179-7.331.502C.239 4.185 0 6.045 0 8s.239 3.815.669 5.498C2.913 13.821 5.393 14 8 14s5.087-.179 7.331-.502C15.761 11.815 16 9.955 16 8s-.239-3.815-.669-5.498M6 11V5l5 3z" />
      </G>
    </Svg>
  );
};