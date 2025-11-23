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

export const LiaBuysellads = (props: IconProps) => {
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
        <Path d="m11.188 6-.22.688-5.905 18L4.625 26h7.344l.281-.219L18.125 21l1.156 4.25.219.75h7.906l-.468-1.312-6.063-18-.25-.688Zm1.468 2h6.531l5.438 16H21L17.063 9.469l-.188-.75h-1.719l-.219.719-2.656 9.28L11.906 20h4.281l-4.906 4H7.375Zm3.313 5.094L17.313 18h-2.75Z" />
      </G>
    </Svg>
  );
};