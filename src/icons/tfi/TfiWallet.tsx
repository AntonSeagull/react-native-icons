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

export const TfiWallet = (props: IconProps) => {
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
        <Path d="M1.564 2C.71 2 .014 2.69.014 3.538H0v10.939c0 .848.695 1.538 1.55 1.538h13.492V14.36H17V2zM1.55 15.014a.545.545 0 0 1-.55-.538V4.893c.024.007.054.005.078.012q.214.065.453.071.01.001.019.003h12.493v3.035h-2.859c-.862 0-1.563.673-1.563 1.5v1c0 .827.701 1.5 1.563 1.5h2.859v3zm9.633-4c-.311 0-.563-.224-.563-.5v-1c0-.276.253-.5.563-.5H16v2zM16 13.359h-.958v-1.345H16zm-.958-5.345V3.979H1.564c-.273 0-.55-.137-.55-.441A.546.546 0 0 1 1.564 3H16v5.014z" />
      </G>
    </Svg>
  );
};