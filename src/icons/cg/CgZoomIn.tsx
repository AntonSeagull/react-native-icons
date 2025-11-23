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

export const CgZoomIn = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M15.343 15.243a6 6 0 1 0-8.485-8.486 6 6 0 0 0 8.485 8.486m1.414-9.9a8 8 0 0 1 .662 10.565q.023.02.046.042l4.242 4.242a1 1 0 0 1-1.414 1.415l-4.243-4.243-.042-.045A8.001 8.001 0 0 1 5.444 5.343a8 8 0 0 1 11.313 0M10.1 7h2v3h3v2h-3v3h-2v-3h-3v-2h3z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};