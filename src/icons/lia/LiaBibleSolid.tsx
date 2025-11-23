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

export const LiaBibleSolid = (props: IconProps) => {
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
        <Path d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4Zm0 2h15v16H9a3 3 0 0 0-1 .188V7c0-.566.434-1 1-1m6 2v3h-3v2h3v7h2v-7h3v-2h-3V8ZM9 24h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1" />
      </G>
    </Svg>
  );
};