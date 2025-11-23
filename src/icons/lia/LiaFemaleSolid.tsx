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

export const LiaFemaleSolid = (props: IconProps) => {
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
        <Path d="M16 2c-2.2 0-4 1.8-4 4 0 1.129.488 2.145 1.25 2.875a4.5 4.5 0 0 0-.656.563c-.84.89-1.364 2.078-1.594 3.374h.031l-2 10L8.781 24H13v6h2v-6h2v6h2v-6h4.219l-.25-1.187-2-10c-.23-1.235-.73-2.41-1.563-3.313a4.8 4.8 0 0 0-.687-.625C19.492 8.145 20 7.137 20 6c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m0 6c.828 0 1.422.316 1.938.875.515.559.921 1.387 1.093 2.313L20.781 22H11.22l1.75-8.812H13c.176-1 .559-1.84 1.063-2.376S15.153 10 16 10" />
      </G>
    </Svg>
  );
};