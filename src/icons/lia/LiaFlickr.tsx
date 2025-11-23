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

export const LiaFlickr = (props: IconProps) => {
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
        <Path d="M8 5C6.355 5 5 6.355 5 8v16c0 1.645 1.355 3 3 3h16c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3Zm0 2h16c.566 0 1 .434 1 1v16c0 .566-.434 1-1 1H8c-.566 0-1-.434-1-1V8c0-.566.434-1 1-1m3.5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 1 0 0-7m9 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 1 0 0-7" />
      </G>
    </Svg>
  );
};