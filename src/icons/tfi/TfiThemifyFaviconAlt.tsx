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

export const TfiThemifyFaviconAlt = (props: IconProps) => {
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
        <Path d="M6.096 1.85C-3.49 4.846.78 11.468 2.037 12.122 4.168 13.227.885 15.696.885 15.696s2.817-.824 6.404-1.192c4.312-.44 9.156-1.068 9.592-3.467C17.68 6.644 14.484-.77 6.096 1.85M10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-5 .5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1M3.7 9.45c3.2 2.864 9.6-.95 9.6-.95-5.542 6.142-9.6.95-9.6.95" />
      </G>
    </Svg>
  );
};