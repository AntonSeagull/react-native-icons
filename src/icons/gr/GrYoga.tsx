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

export const GrYoga = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 11-1 3 1 3h-1.5L9 14l.5-4.5zm1-9L9 6v8l1 3H6l-3 5m17.5 0-5-3.5L12 17l-1-3 1-3 3.5 2v5.5M14 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3 2L10 17v-3.5z" />
      </G>
    </Svg>
  );
};