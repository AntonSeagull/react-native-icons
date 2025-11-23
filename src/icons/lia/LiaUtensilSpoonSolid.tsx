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

export const LiaUtensilSpoonSolid = (props: IconProps) => {
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
        <Path d="M23.094 4c-.446.008-.899.07-1.344.156-1.777.34-3.559 1.246-4.875 2.563-1.316 1.316-1.934 2.867-1.875 4.375.047 1.176.504 2.289 1.219 3.25L4.28 26.28 5.72 27.72 17.656 15.78c.961.715 2.074 1.172 3.25 1.219 1.508.059 3.059-.559 4.375-1.875 1.317-1.316 2.223-3.098 2.563-4.875s.125-3.656-1.157-4.937c-.64-.641-1.425-1.012-2.28-1.188A6 6 0 0 0 23.093 4m0 2c.308-.004.605.008.875.063.539.105.988.332 1.312.656.649.648.887 1.8.625 3.156-.261 1.355-1.031 2.813-2.031 3.813S21.925 15.035 21 15c-.926-.035-1.867-.492-2.687-1.312S17.035 11.926 17 11s.313-1.875 1.313-2.875 2.457-1.77 3.812-2.031c.34-.067.66-.09.969-.094" />
      </G>
    </Svg>
  );
};