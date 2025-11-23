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

export const TfiWand = (props: IconProps) => {
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
        <Path d="M17 5h-3.293l2.328 2.328-.707.707L13 5.707V9h-1V5.714L1.354 16.379l-.707-.707L11.3 5H8V4h3.293L8.965 1.672l.707-.707L12 3.293V0h1v3.297l2.287-2.291.707.707L13.711 4H17z" />
      </G>
    </Svg>
  );
};