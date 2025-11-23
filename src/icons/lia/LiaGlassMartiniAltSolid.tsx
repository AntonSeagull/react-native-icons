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

export const LiaGlassMartiniAltSolid = (props: IconProps) => {
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
        <Path d="M8.5 4A5.503 5.503 0 0 0 3 9.5C3 12.535 5.465 15 8.5 15c.813 0 1.578-.203 2.281-.531L16 21.344V27h-4v2h10v-2h-4v-5.656l8.813-11.625.187-.281V8H13.75c-.605-2.32-2.766-4-5.25-4m0 2c1.39 0 2.59.84 3.125 2H7v1.438l.188.28 2.343 3.095A3.1 3.1 0 0 1 8.5 13 3.46 3.46 0 0 1 5 9.5 3.46 3.46 0 0 1 8.5 6m1.438 4h14.125l-1.5 2H13.5l1.5 2h6.031L17 19.344Z" />
      </G>
    </Svg>
  );
};