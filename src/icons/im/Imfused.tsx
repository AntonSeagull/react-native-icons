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

export const Imfused = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13M4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1.345 5h1.014a2.505 2.505 0 0 1-1.624 2.665 2.5 2.5 0 0 1-3.204-1.494 1.5 1.5 0 0 0-1.923-.896A1.5 1.5 0 0 0 4.655 12H3.642a2.505 2.505 0 0 1 1.624-2.665 2.5 2.5 0 0 1 3.204 1.494 1.5 1.5 0 0 0 1.923.896A1.5 1.5 0 0 0 11.346 10z" />
      </G>
    </Svg>
  );
};