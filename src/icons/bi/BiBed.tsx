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

export const BiBed = (props: IconProps) => {
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
        <Path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443M18 7v2h-5V7zM6 7h5v2H6zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2z" />
      </G>
    </Svg>
  );
};