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

export const LiaDiceD20Solid = (props: IconProps) => {
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
        <Path d="m16 3.719-.625.5-8.25 6.406-.25.219-.094.312-2.75 10.094-.218.781L16 28.125l12.188-6.094-.22-.781-2.75-10.094-.093-.312-.25-.219-8.25-6.406Zm-1 3.344V10h-3.781Zm2 0L20.781 10H17ZM9.063 12H14l-3.594 4.781ZM18 12h4.938l-1.344 4.781Zm-2 .688L20 18h-8ZM7.813 15l1 3.5-2.25 1.125Zm16.375 0 1.25 4.625-2.25-1.125ZM12 20h8l-4 5.313Zm-2.312.281 2.937 3.907L7.25 21.5Zm12.625 0L24.75 21.5l-5.375 2.688Z" />
      </G>
    </Svg>
  );
};