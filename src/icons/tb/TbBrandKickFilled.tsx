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

export const TbBrandKickFilled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 3a1 1 0 0 1 1 1v3h1V6a1 1 0 0 1 .883-.993L12 5h1V4a1 1 0 0 1 .883-.993L14 3h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-.883.993L18 11h-1v2h1a1 1 0 0 1 .993.883L19 14v1h1a1 1 0 0 1 .993.883L21 16v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1h-1a1 1 0 0 1-.993-.883L11 18v-1h-1v3a1 1 0 0 1-.883.993L9 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      </G>
    </Svg>
  );
};