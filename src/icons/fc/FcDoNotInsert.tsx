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

export const FcDoNotInsert = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m31 29-7 7-7-7z" />
        <Path d="M22 7h4v25h-4z" />
        <Path d="M42 18c-3.3 0-6 2.7-6 6v12c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2V24c0-3.3-2.7-6-6-6H4v4h2c1.1 0 2 .9 2 2v12c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V24c0-1.1.9-2 2-2h2v-4z" />
        <Path fill="#37474F" d="M3.563 6.396 6.39 3.568l37.966 37.966-2.828 2.828z" />
      </G>
    </Svg>
  );
};