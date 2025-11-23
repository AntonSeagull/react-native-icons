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

export const LiaNotEqualSolid = (props: IconProps) => {
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
        <Path d="M6.719 5.281 5.28 6.72l20 20 1.438-1.438L21.437 20H27v-2h-7.562l-4-4H27v-2H13.438ZM5 12v2h4.906l-2-2Zm0 6v2h10.906l-2-2Z" />
      </G>
    </Svg>
  );
};