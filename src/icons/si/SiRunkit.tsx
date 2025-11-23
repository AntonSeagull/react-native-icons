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

export const SiRunkit = (props: IconProps) => {
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
        <Path d="M23.97 14.797a3 3 0 0 1-1.47 3.02l-9 5.2a3 3 0 0 1-3 0l-9-5.2a3 3 0 0 1-1.47-3.02l1.32-7.2a3 3 0 0 1 .98-1.82 3 3 0 0 1 .49-.35l7.55-4.37a3.01 3.01 0 0 1 3.28.02l7.53 4.35c.1.05.19.1.28.17a3 3 0 0 1 1.19 2zm-9.54-10.77-7.72 1.59c-.43.08-.51.64-.14.86l5.6 3.23c.23.13.5.07.63-.19l1.58-3.6.53-1.22c.16-.35-.11-.75-.5-.67z" />
      </G>
    </Svg>
  );
};