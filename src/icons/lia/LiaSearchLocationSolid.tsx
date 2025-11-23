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

export const LiaSearchLocationSolid = (props: IconProps) => {
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
        <Path d="M19 3C13.489 3 9 7.489 9 13c0 2.395.839 4.587 2.25 6.313L3.281 27.28l1.438 1.44 7.969-7.969A9.92 9.92 0 0 0 19 23c5.511 0 10-4.489 10-10S24.511 3 19 3m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8m0 3a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4m0 2a2 2 0 1 1 .001 3.999A2 2 0 0 1 19 10" />
      </G>
    </Svg>
  );
};