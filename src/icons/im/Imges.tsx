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

export const Imges = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 18 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 9, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 2h-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1M2 3v10h-.998L1 12.998V1.002L1.002 1h13.996l.002.002V2H3c-.55 0-1 .45-1 1m15 11.998-.002.002H3.002L3 14.998V3.002L3.002 3h13.996l.002.002z" />
        <Path d="M15 5.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 15 5.5M16 14H4v-2l3.5-6 4 5h1L16 8z" />
      </G>
    </Svg>
  );
};