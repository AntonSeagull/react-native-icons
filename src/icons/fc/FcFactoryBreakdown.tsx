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

export const FcFactoryBreakdown = (props: IconProps) => {
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
        <Path fill="#E64A19" d="M29 23v-6l-8 4v2h-4v4h-4v-4H5v20h28V23z" />
        <Path fill="#992B0A" d="M25 27h4v4h-4zM9 35h4v4H9zM25 35h4v4h-4zM17 35h4v4h-4zM17 27h4v4h-4z" />
        <Path fill="#BF360C" d="M41.2 5H38v2h-2v2h-2.3L32 43h11z" />
      </G>
    </Svg>
  );
};