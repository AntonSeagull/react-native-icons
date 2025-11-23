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

export const ImntUp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 9.5V7a1.502 1.502 0 0 0-2.236-1.307 1.5 1.5 0 0 0-2.264-.31A1.5 1.5 0 0 0 9 5.086V1.5C9 .673 8.327 0 7.5 0S6 .673 6 1.5v6.167L3.25 6.201a1.502 1.502 0 0 0-1.789 2.381l.012.011L5.21 12H4.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-.691l1.138-2.276A.5.5 0 0 0 15 9.5m-1 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0-4.118L12.691 12H6.694L2.15 7.857a.5.5 0 0 1 .614-.782l3.5 1.866a.5.5 0 0 0 .735-.441v-7a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0 .5.5 0 0 1 1 0V7a.5.5 0 0 0 1 0 .5.5 0 0 1 1 0z" />
      </G>
    </Svg>
  );
};