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

export const HiCheckBadge = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M8.603 3.799A4.5 4.5 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.5 4.5 0 0 1 3.498 1.307 4.5 4.5 0 0 1 1.307 3.497A4.5 4.5 0 0 1 21.75 12a4.5 4.5 0 0 1-1.549 3.397 4.5 4.5 0 0 1-1.307 3.497 4.5 4.5 0 0 1-3.497 1.307A4.5 4.5 0 0 1 12 21.75a4.5 4.5 0 0 1-3.397-1.549 4.5 4.5 0 0 1-3.498-1.306 4.5 4.5 0 0 1-1.307-3.498A4.5 4.5 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.5 4.5 0 0 1 1.307-3.497 4.5 4.5 0 0 1 3.497-1.307m7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};