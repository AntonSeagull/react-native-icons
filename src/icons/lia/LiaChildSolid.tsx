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

export const LiaChildSolid = (props: IconProps) => {
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
        <Path d="M16 3c-2.75 0-5 2.25-5 5 0 1.57.766 2.957 1.906 3.875C11.176 12.93 10 14.832 10 17v3.406l.281.313L12 22.437V29h2v-5h4v5h2v-6.562l1.719-1.72.281-.312V17c0-2.168-1.176-4.07-2.906-5.125C20.234 10.957 21 9.57 21 8c0-2.75-2.25-5-5-5m0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3-3-1.332-3-3 1.332-3 3-3m0 8c2.219 0 4 1.781 4 4v2.563l-.437.437h-7.125L12 19.563V17c0-2.219 1.781-4 4-4" />
      </G>
    </Svg>
  );
};