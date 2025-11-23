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

export const DiChrome = (props: IconProps) => {
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
        <Path fill="#444" d="M20.206 16.286a4.206 4.206 0 1 1-8.412 0 4.206 4.206 0 0 1 8.412 0m-4.231-5.012h10.164A11.31 11.31 0 0 0 16 4.978a11.29 11.29 0 0 0-8.876 4.301l3.878 6.631a5.01 5.01 0 0 1 4.973-4.635zM16 21.297a5.01 5.01 0 0 1-4.714-3.306l-4.68-8.004a11.26 11.26 0 0 0-1.915 6.297c0 5.692 4.206 10.401 9.679 11.191l3.901-6.723a5 5 0 0 1-2.272.544zm10.5-9.217h-7.773a5 5 0 0 1 2.285 4.206 5 5 0 0 1-.607 2.393l.003.002-5.158 8.888q.372.024.751.025c6.245 0 11.308-5.063 11.308-11.308 0-1.486-.287-2.906-.809-4.206" />
      </G>
    </Svg>
  );
};