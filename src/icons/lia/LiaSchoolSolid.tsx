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

export const LiaSchoolSolid = (props: IconProps) => {
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
        <Path d="M16 4 3 7v2l13-3 13 3V7Zm-6 6c-3.227 0-6.375 1.313-6.375 1.313l-.625.28V27h11.281c.348.598.98 1 1.719 1 .738 0 1.371-.402 1.719-1H29V11.594l-.625-.281S25.227 10 22 10c-2.918 0-5.48.98-6 1.188C15.48 10.98 12.918 10 10 10m0 2c1.934 0 4 .625 5 .969v11.125c-1.113-.367-2.941-.875-5-.875-2.102 0-3.812.484-5 .875V12.969C5.77 12.69 7.8 12 10 12m12 0c2.2 0 4.23.691 5 .969v11.125c-1.187-.39-2.898-.875-5-.875-2.059 0-3.887.508-5 .875V12.969c1-.344 3.066-.969 5-.969" />
      </G>
    </Svg>
  );
};