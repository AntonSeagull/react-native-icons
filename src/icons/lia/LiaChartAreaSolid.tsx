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

export const LiaChartAreaSolid = (props: IconProps) => {
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
        <Path d="m28 4.063-1.625 1.25-4.625 3.625L16.156 8l-.375-.062-.344.218-5.687 3.781-4.562-.906L4 10.781V28h24Zm-2 4.093v5.375l-4.219 3.344-5.468-1.812-.47-.157-.405.25-5.563 3.719L6 17.313v-4.094l3.813.75.406.094.344-.22 5.656-3.78 5.625.937.437.063.344-.282Zm0 7.938V26H6v-6.5l3.625 1.438.5.187.438-.281 5.624-3.75 5.5 1.843.5.188.438-.344Z" />
      </G>
    </Svg>
  );
};