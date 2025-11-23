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

export const LiaQuranSolid = (props: IconProps) => {
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
        <Path d="M8 3C6.355 3 5 4.355 5 6v20c0 1.645 1.355 3 3 3h19V3Zm0 2h17v18H8a3 3 0 0 0-1 .188V6c0-.566.434-1 1-1m0 1v16h16V6Zm2 2h12v12H10Zm6 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 2h-3v6h6v-6Zm3 3c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1m-3 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-3-3c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m2-1h2v2h-2ZM8 25h17v2H8c-.566 0-1-.434-1-1s.434-1 1-1" />
      </G>
    </Svg>
  );
};