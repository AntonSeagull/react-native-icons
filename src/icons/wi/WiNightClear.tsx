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

export const WiNightClear = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7.91 14.48c0-.96.19-1.87.56-2.75s.88-1.63 1.51-2.26 1.39-1.14 2.27-1.52 1.8-.57 2.75-.57h1.14c.16.04.23.14.23.28l.05.88c.04 1.27.49 2.35 1.37 3.24s1.94 1.37 3.19 1.42l.82.07c.16 0 .24.08.24.23v.98c.01 1.28-.3 2.47-.93 3.56a7 7 0 0 1-2.57 2.59c-1.08.63-2.27.95-3.55.95-.97 0-1.9-.19-2.78-.56s-1.63-.88-2.26-1.51a7.1 7.1 0 0 1-1.5-2.26c-.35-.88-.54-1.8-.54-2.77m1.83 0q0 1.14.45 2.16c.3.67.7 1.24 1.19 1.7s1.05.82 1.69 1.08a4.823 4.823 0 0 0 3.7.06 6.2 6.2 0 0 0 1.65-.96c.51-.41.94-.93 1.31-1.57s.6-1.33.71-2.09c-1.63-.34-2.94-1.04-3.92-2.1s-1.55-2.3-1.7-3.74c-.96.06-1.82.35-2.61.88-.78.53-1.39 1.2-1.82 2.02s-.65 1.67-.65 2.56" />
      </G>
    </Svg>
  );
};