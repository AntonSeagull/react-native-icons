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

export const LiaCheckDoubleSolid = (props: IconProps) => {
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
        <Path d="M23.281 7.281 11.5 19.063 8.719 16.28 7.28 17.72l2.782 2.781L8 22.563 1.719 16.28.28 17.72l7 7 .719.687.719-.687 2.781-2.782 2.781 2.782.719.687.719-.687 15.906-16-1.437-1.438L15 22.563 12.938 20.5l11.78-11.781Z" />
      </G>
    </Svg>
  );
};