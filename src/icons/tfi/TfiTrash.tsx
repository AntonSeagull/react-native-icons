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

export const TfiTrash = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.935 2.016A2 2 0 0 0 9 .5c-.932 0-1.71.643-1.931 1.516H3.5v1h11v-1zM9 1.5c.382 0 .705.221.875.516H8.142A.99.99 0 0 1 9 1.5M13 4h1v10.516c0 .827-.673 1.5-1.5 1.5h-7c-.827 0-1.5-.673-1.5-1.5V4h1v10.516a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM8 5v8H7V5zm3 0v8h-1V5z" />
      </G>
    </Svg>
  );
};