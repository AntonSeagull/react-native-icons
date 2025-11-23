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

export const RiHourglass2Fill = (props: IconProps) => {
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
        <Path d="M4 2h16v4.46L13.537 12 20 17.54V22H4v-4.46L10.463 12 4 6.46zm12.297 5L18 5.54V4H6v1.54L7.703 7zM12 13.317 6 18.46V20h1l5-3 5 3h1v-1.54z" />
      </G>
    </Svg>
  );
};