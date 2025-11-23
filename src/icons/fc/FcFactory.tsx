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

export const FcFactory = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#BF360C" d="M41.2 5h-7.3L32 43h11z" />
        <Path fill="#E64A19" d="M33 23h-4v-6l-12 6v-6L5 23v20h28z" />
        <Path fill="#FFC107" d="M9 27h4v4H9zM17 27h4v4h-4zM25 27h4v4h-4zM9 35h4v4H9zM17 35h4v4h-4zM25 35h4v4h-4z" />
      </G>
    </Svg>
  );
};