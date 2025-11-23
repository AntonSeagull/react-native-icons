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

export const GrBaby = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 15h4s-1 1.5-2 1.5-2-1.5-2-1.5m2-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 6-4-3m0 6 3 2.5-2.5 2.5M6 12l4-3m0 6-2.5 2.75L10 20m0-11h4v3h-4z" />
      </G>
    </Svg>
  );
};