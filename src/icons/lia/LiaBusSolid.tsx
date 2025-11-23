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

export const LiaBusSolid = (props: IconProps) => {
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
        <Path d="M9 4C6.8 4 5 5.8 5 8v5H3v3h2v11c0 .55.45 1 1 1h3l.344-1h13.312L23 28h3c.55 0 1-.45 1-1V16h2v-3h-2V8c0-2.2-1.8-4-4-4Zm0 2h14c1.117 0 2 .883 2 2H7c0-1.117.883-2 2-2m-2 4h8v7H7Zm10 0h8v7h-8ZM7 19h18v6H7Zm1 2v2h4v-2Zm12 0v2h4v-2Z" />
      </G>
    </Svg>
  );
};