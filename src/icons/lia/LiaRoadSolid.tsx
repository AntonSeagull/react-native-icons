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

export const LiaRoadSolid = (props: IconProps) => {
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
        <Path d="m5.469 6-.188.75-4.656 18L.281 26H31.72l-.344-1.25-4.656-18L26.53 6ZM7.03 8h8.094l-.062 3h1.874l-.062-3h8.094l4.156 16H17.281l-.093-4h-2.375l-.094 4H2.875ZM15 13l-.125 5h2.25L17 13Z" />
      </G>
    </Svg>
  );
};