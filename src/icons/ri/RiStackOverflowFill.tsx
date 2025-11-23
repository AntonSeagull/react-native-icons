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

export const RiStackOverflowFill = (props: IconProps) => {
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
        <Path d="M18.001 20.003v-5.334h2v7.334h-16v-7.334h2v5.334zM7.6 14.736l.313-1.98 8.837 1.7-.113 1.586zm1.2-4.532.732-1.6 7.998 3.733-.733 1.6zm2.265-3.932 1.133-1.333 6.798 5.665-1.133 1.333zm4.332-4.132 5.265 7.064-1.4 1.067-5.264-7.065zM7.333 18.668v-2h9.33v2z" />
      </G>
    </Svg>
  );
};