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

export const LiaArrowsAltVSolid = (props: IconProps) => {
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
        <Path d="m16 2.094-.719.687-8 8L8.72 12.22 15 5.938v20.125L8.719 19.78 7.28 21.22l8 8 .719.687.719-.687 8-8-1.438-1.438L17 26.063V5.938l6.281 6.28 1.438-1.437-8-8Z" />
      </G>
    </Svg>
  );
};